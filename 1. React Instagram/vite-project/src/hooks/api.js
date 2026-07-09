const API_URL = "http://localhost:3000/api";

const api = {

  async getPosts() {
    try {
      const response = await fetch(`${API_URL}/user`);

      if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro de requisição:", error);
      throw error;
    }
  }
}

export default api;
