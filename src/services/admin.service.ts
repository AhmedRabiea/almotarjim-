import User from "@/interfaces/user";

import { api, formAxios } from "./api";

const getUsers = async (page: number) => {
  const res = await api.get(`/users/client?page=${page}`);
  return res.data.data;
};

const getAgents = async (page: number) => {
  const res = await api.get(`/users/agent?page=${page}`);
  return res.data.data;
};

const getTranslators = async (page: number) => {
  const res = await api.get(`/users/translator?page=${page}`);
  return res.data.data;
};

const getSupervisors = async (page: number) => {
  const res = await api.get(`/users/supervisor?page=${page}`);
  return res.data.data;
};

const getReports = async (from?: string, to?: string) => {
  if (!!from || !!to) {
    const res = await api.get(
      `statistics/get-statistcs-with-period?from=${from}&to=${to || from}`
    );
    return res.data.data;
  }
  const res = await api.get("/statistics/reports");
  return res.data.data;
};

const createAgent = async (data: Partial<User>) => {
  const res = await api.post("/users/register/agent", {
    ...data,
    role: "agent",
  });

  return res.data;
};

const createTranslator = async (data: Partial<User>) => {
  const res = await api.post("/users/register/translator", {
    ...data,
    role: "translator",
  });

  return res.data;
};

const createSupervisor = async (data: Partial<User>) => {
  const res = await api.post("/users/register/supervisor", {
    ...data,
    role: "supervisor",
  });

  return res.data;
};

const getUser = async (userId: string) => {
  const res = await api.get(`/users/show/${userId}`);
  return res.data;
};
const updateUser = async (userId: string, data: Partial<User>) => {
  const res = await api.put(`/users/update-user/${userId}`, data);
  return res.data;
};

const deleteUser = async (id: string) => {
  const res = await api.delete(`/users/delete-user/${id}`);
  return res.data;
};

const createService = async (data: any) => {
  const config = {
    headers: {
      "Content-Type":
        "multipart/form-data; charset=utf-8; boundary=" +
        Math.random().toString().substr(2),
    },
  };

  const res = await formAxios.post(
    "/services/create",
    {
      ...data,
      image: data.image[0],
    },
    config
  );

  return res.data;
};

const deleteService = async (id: string) => {
  const res = await api.delete(`/services/delete/${id}`);
  return res.data;
};

const getAgentHistory = async (id: string) => {
  const res = await api.get(`/statistics/agent-history/${id}`);
  return res.data;
};
const getClientHistory = async (id: string) => {
  const res = await api.get(`/statistics/client-history/${id}`);
  return res.data;
};
const getTranslatorHistory = async (id: string) => {
  const res = await api.get(`/statistics/translator-pages/${id}`);
  return res.data;
};

const AdminService = {
  getUsers,
  getAgents,
  getTranslators,
  getSupervisors,
  getReports,
  createAgent,
  createTranslator,
  createSupervisor,
  updateUser,
  deleteUser,
  createService,
  deleteService,
  getUser,
  getAgentHistory,
  getClientHistory,
  getTranslatorHistory,
};

export default AdminService;
