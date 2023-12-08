import User from "@/interfaces/user";

import { api } from "./api";

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

const getReports = async () => {
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

const deleteUser = async (id: string) => {
  const res = await api.delete(`/users/delete-user/${id}`);
  return res.data;
};

const createService = async (data: any) => {
  const res = await api.post("/services/create", {
    ...data,
  });

  return res.data;
};

const deleteService = async (id: string) => {
  const res = await api.delete(`/services/delete/${id}`);
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
  deleteUser,
  createService,
  deleteService,
};

export default AdminService;
