const API_URL = "http://localhost:3000/api";

const api = {

  async getPosts() {
    try {
      const response = await fetch(`${API_URL}/post`);

      if (!response.ok) {
        throw new Error("Error fetching posts");
      }

      return await response.json();
    } catch (error) {
      console.error("Request error:", error);
      throw error;
    }
  }
}

export default api;
