const propiedades = [
    {
          nombre: "Propiedad uno",
          src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
          
          descripcion: "Casa 2 pisos",
          ubicacion: "Santiago Centro",
          habitaciones: 4,
          costo: 5000,
          smoke: true,
          pets: true,
          enVenta:true 
          
        
       },
       {
           nombre: "Propiedad dos",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "Departamento",
           ubicacion: "Providencis",
           habitaciones: 3,
           costo: 4000,
           smoke: false,
           pets: false,
           enVenta:true 
          
           
       },
       {
           nombre: "Propiedad tres",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "Casa 2 pisos",
           ubicacion: "Ñuñoa",
           habitaciones: 4,
           costo: 5000,
           smoke: true,
           pets: false,
           enVenta:true 
          
       },
       {
           nombre: "Propiedad cuatro",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "Departamento",
           ubicacion: "La Cisterna",
           habitaciones: 1,
           costo: 3000,
           smoke: false,
           pets: true, 
           enVenta:true
          
       },
      
     
       {
             nombre: "Propiedad cinco",
             src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
             
             descripcion: "Casa 3 pisos",
             ubicacion: "El Bosque",
             habitaciones: 3,
             costo: 4000,
             smoke: false,
             pets: false, 
             enVenta:false
          
           
          },
          {
              nombre: "Propiedad seis",
              src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
              
              descripcion: "Departamento",
              ubicacion: "Santiago Centro",
              habitaciones: 3,
              costo: 5000,
              smoke: false,
              pets: true, 
              enVenta:false
          
          },
          {
              nombre: " Propiedad siete",
              src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
              
              descripcion: "Casa 1 pisos",
              ubicacion:"Vitacura",
              habitaciones: 4,
              costo: 7000,
              smoke: true,
              pets: false,
              enVenta:false
          
          },
          {
              nombre: "Propiedad ocho",
              descripcion: "Casa 2 pisos",
              ubicacion: "Santiago Centro",
              habitaciones: 4,
              costo: 5000,
              smoke: true,
              pets: true, 
              enVenta:false
          
          },
         
        ];
       
     const renderProp = ({ nombre, src, descripcion, ubicacion, smoke, pets, enVenta, }) => {
       return `<div class="propiedades ${enVenta ? "enventa" : ""} ${
         smoke === true ? "icono": ""
       }">

         <h2>${nombre}</h2>
         <p>${descripcion}</p>
         <p>${ubicacion}</p>
        <p>${ smoke  ?  "Permitido fumar " : "No se permite fumar"}</p>
        <p>${pets  ?  "Se permiten mascotas" : "No se permiten mascotas" } </p>
         </div>`;
     };
     
     let propiedadesVentaHTML = "";
     let propiedadesAlquilerHTML = "";
     
     for (const propiedad of propiedades) {
       if (propiedad.enVenta) {
         propiedadesVentaHTML += renderProp(propiedad);
       } else {
         propiedadesAlquilerHTML += renderProp(propiedad);
       }
     }
     
     const contenedorPoralquilar = document.querySelector("#propiedades_por_alquilar");
     const contenedorEnVenta = document.querySelector("#propiedades_en_venta");
     
     contenedorEnVenta.innerHTML += propiedadesVentaHTML;
     contenedorPoralquilar.innerHTML += propiedadesAlquilerHTML;
     
     
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
       