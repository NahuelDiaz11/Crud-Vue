import {
  localidadesShowApi,
  localidadesCreateOrUpdateApi,
} from "../../../../api/localidadesApi";

export const loadLocalidades = async ({ commit }) => {
  const { data } = await localidadesShowApi.get("localidades/6");
  const localidades = [];
  for (let id of Object.keys(data.localidades)) {
    localidades.push({
      id,
      ...data.localidades[id],
    });
    
  }
  commit("setLocalidades", localidades);
};

// export const updateLocalidad = async ({ commit }, localidad) => {
//   const { nombre, provincia, codigo_postal, cadeteria } = localidad;
//   const dataUpdate = { nombre, provincia, codigo_postal, cadeteria };
//   const { data } = await localidadesCreateOrUpdateApi.put(`localidades/${id}`, dataUpdate);

//   commit("updateLocalidad", dataUpdate);

//   return dataUpdate;
// };


export const createLocalidad = async ({ commit }, localidad) => {
  const { nombre, provincia, codigo_postal, cadeteria } = localidad;
  const dataSave = { nombre, provincia, codigo_postal, cadeteria };
  const { data } = await localidadesCreateOrUpdateApi.post("localidades", dataSave);

  commit("addLocalidad", dataSave);

  return dataSave;
};
