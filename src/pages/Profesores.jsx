import { useForm } from "react-hook-form";

/* const Profesores = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        names: "Calos Jose",
        lastnames: "Perez Garcia",
        phone: "04121234567",
        addres: "Calle universidad, 123, 28001",
        title: "Doctorado en ciencias de computación",
        especiality: "Inteligencia Artificial"
    }
  }); */

  const Profesores = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,  
    } = useForm({
      defaultValues: {
        names: "Calos Jose",
        lastnames: "Perez Garcia",
        phone: "04121234567",
        addres: "Calle universidad, 123, 28001",
        title: "Doctorado en ciencias de computación",
        especiality: "Inteligencia Artificial",
        subject: "matematica", 
        status: "activo" 
      }
    });

  const submit = (data) => {
    for (const key in data) {
        setValue(key, data[key]);
    }

    alert('Datos actualizados');

  };

  return (
    <div>
      <h1>Editar datos del profesor</h1>

      <form onSubmit={handleSubmit(submit)} className="form-edit">
        <section className="edit-section">
          <h3>Datos Personales</h3>

          <div className="data">
            <label>Nombres</label>

            <input
              type="text"
              {...register("names", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "el campo debe tener minimo 3 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "el campo debe tener maximo 255 caracteres",
                },
              })}
            />

            <div>{errors.names && <span>{errors.names.message}</span>}</div>
          </div>

          <div className="data">
            <label>Apellidos</label>
            <input
              type="text"
              {...register("lastnames", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "el campo debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "el campo debe tener como maximo 255 caracteres",
                },
              })}
            />

            <div>
              {errors.lastnames && <span>{errors.lastnames.message}</span>}
            </div>
          </div>

          <div className="data">
            <label>Telefono</label>
            <input
              type="text"
              {...register("phone", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 11,
                  message: "el campo debe tener al menos 11 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "el campo debe tener como maximo 15 caracteres",
                },
              })}
            />

            <div>{errors.phone && <span>{errors.phone.message}</span>}</div>
          </div>

          <div className="data">
            <label>Dirección</label>
            <textarea
              {...register("addres", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "el campo debe tener al menos 3",
                },
                maxLength: {
                  value: 255,
                  message: "el campo debe tener como maximo 255 caracteres",
                },
              })}
            />

            <div>{errors.addres && <span>{errors.addres.message}</span>}</div>
          </div>
        </section>

        <section className="edit-section">
          <h3>Datos Académicos</h3>

          <div className="data">
            <label>Departamento</label>

            <select
              id="subject"
              {...register("subject", {
                required: "este campo es obligatorio"
              })}
            > 
            <option value="matematica">Matemática</option>
            <option value="fisica">Física</option>
            <option value="informatica">Informática</option>
            <option value="administracion">Administración</option>
            </select>

            <div>{errors.subject && <span>{errors.subject.message}</span>}</div>
          </div>

          <div className="data">

            <label>Estatus</label>
            <select
              id="status"
              {...register("status", {
                required: "este campo es obligatorio",
              })}
            >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>

            </select>

            <div>
              {errors.status && <span>{errors.status.message}</span>}
            </div>
          </div>

          <div className="data">
            <label>Titulación</label>
            <input
              type="text"
              {...register("title", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "el campo debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 255,
                  message: "el campo debe tener como maximo 255 caracteres",
                },
              })}
            />

            <div>{errors.title && <span>{errors.title.message}</span>}</div>
          </div>

          <div className="data">
            <label>Especialidad</label>
            <input
            type="text"
              {...register("especiality", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "el campo debe tener al menos 3",
                },
                maxLength: {
                  value: 255,
                  message: "el campo debe tener como maximo 255 caracteres",
                },
              })}
            />

            <div>{errors.especiality && <span>{errors.especiality.message}</span>}</div>
          </div>
        </section>

        <button type="submit" className="button">Editar Datos</button>
      </form>
    </div>
  );
};

export default Profesores;
