import { useEffect, useMemo, useState } from "react";
import { BrandLoader } from "@/components/brand-loader";
import {
  clearSessionUser,
  ensureUsersInitialized,
  loginAccount,
  registerAccount,
  restoreSessionUser,
} from "@/lib/auth-store";
import { AuthContext } from "@/lib/auth";
import { DataContext } from "@/lib/data-context";
import { loadLocacaoData } from "@/lib/data-loader";
import { ReactRouterApp } from "@/react-router-app";
import "./styles.css";

export function AppRoot() {
  const INTRO_MIN_MS = 1500;
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [minimumDone, setMinimumDone] = useState(false);
  const [loaderDismissed, setLoaderDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinimumDone(true), INTRO_MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function bootstrapAuth() {
      try {
        await ensureUsersInitialized();
        setCurrentUser(restoreSessionUser());
      } catch (authError) {
        console.error(authError);
        setCurrentUser(null);
      } finally {
        setAuthLoading(false);
      }
    }

    bootstrapAuth();
  }, []);

  useEffect(() => {
    async function bootstrapData() {
      try {
        setLoading(true);
        const payload = await loadLocacaoData();
        setData(payload);
        setError("");
      } catch (loadError) {
        console.error(loadError);
        setError("Não foi possível carregar os dados do arquivo JSON.");
      } finally {
        setLoading(false);
      }
    }

    bootstrapData();
  }, []);

  const authContext = useMemo(
    () => ({
      authLoading,
      currentUser,
      isAuthenticated: Boolean(currentUser),
      isAdmin: currentUser?.role === "admin",
      login: (identifier, password) => {
        const result = loginAccount(identifier, password);
        if (result.ok) {
          setCurrentUser(result.user);
        }
        return result;
      },
      register: (payload) => {
        const result = registerAccount(payload);
        if (result.ok) {
          setCurrentUser(result.user);
        }
        return result;
      },
      logout: () => {
        setCurrentUser(null);
        clearSessionUser();
      },
    }),
    [authLoading, currentUser],
  );

  const dataContext = useMemo(
    () => ({
      data,
      loading,
      error,
      createRecord: (entityKey, record) => {
        setData((current) => {
          if (!current) return current;
          const list = current[entityKey] || [];
          const nextId = list.length ? Math.max(...list.map((item) => item.id)) + 1 : 1;
          return { ...current, [entityKey]: [...list, { id: nextId, ...record }] };
        });
      },
      updateRecord: (entityKey, id, changes) => {
        setData((current) => {
          if (!current) return current;
          return {
            ...current,
            [entityKey]: (current[entityKey] || []).map((item) =>
              item.id === id ? { ...item, ...changes } : item,
            ),
          };
        });
      },
      deleteRecord: (entityKey, id) => {
        setData((current) => {
          if (!current) return current;
          return {
            ...current,
            [entityKey]: (current[entityKey] || []).filter((item) => item.id !== id),
          };
        });
      },
      async reloadFromJson() {
        const payload = await loadLocacaoData();
        setData(payload);
      },
    }),
    [data, error, loading],
  );

  const appReady = !authLoading && !loading;
  const showLoader = !loaderDismissed;

  return (
    <AuthContext.Provider value={authContext}>
      <DataContext.Provider value={dataContext}>
        <BrandLoader
          visible={showLoader}
          minimumDone={minimumDone && appReady}
          onExitDone={() => setLoaderDismissed(true)}
        />
        {appReady ? <ReactRouterApp /> : null}
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}
