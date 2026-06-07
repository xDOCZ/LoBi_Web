import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "@/pages/admin-page";
import { CorretoresPage } from "@/pages/corretores-page";
import { HomePage } from "@/pages/home-page";
import { ImobiliariasPage } from "@/pages/imobiliarias-page";
import { ImovelDetailPage } from "@/pages/imovel-detail-page";
import { ImoveisPage } from "@/pages/imoveis-page";
import { PropostasPage } from "@/pages/propostas-page";

export function ReactRouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/agentes" element={<CorretoresPage />} />
        <Route path="/imobiliarias" element={<ImobiliariasPage />} />
        <Route path="/imoveis" element={<ImoveisPage />} />
        <Route path="/imoveis/:id" element={<ImovelDetailPage />} />
        <Route path="/propostas" element={<PropostasPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
