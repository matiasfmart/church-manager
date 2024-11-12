import useService from "../hooks/useService";

export const getAllMembers = async () => {
  return await useService('get', '/members');
};

export const getCellOptions = async () => {
  return await useService('get', '/members/cell-options');
};

export const getAreaOptions = async () => {
  return await useService('get', '/members/area-options');
};

export const addMembers = async (req) => {
  return await useService('post', '/members/add-members', req);
};

export const addMember = async (req) => {
  return await useService('post', '/members/add-member', req);
};