export default {
  async fetch() {
    return new Response("Lo&Bi app build is static. Use Vite dev/preview for local execution.", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
