const propiedades = [
    {
          nombre: "propiedad uno",
          src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
          
          descripcion: "casa 2 pisos",
          ubicacion: "santiago centro",
          habitaciones: 4,
          costo: 5000,
          smoke: true,
          pets: true,
          enVenta:true 
          
        
       },
       {
           nombre: "propiedad dos",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "casa 2 pisos",
           ubicacion: "santiago centro",
           habitaciones: 4,
           costo: 5000,
           smoke: false,
           pets: false,
           enVenta:true 
          
           
       },
       {
           nombre: "propiedad tres",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "casa 2 pisos",
           ubicacion: "santiago centro",
           habitaciones: 4,
           costo: 5000,
           smoke: false,
           pets: false,
           enVenta:true 
          
       },
       {
           nombre: "propiedad cuatro",
           src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
           
           descripcion: "casa 2 pisos",
           ubicacion: "santiago centro",
           habitaciones: 4,
           costo: 5000,
           smoke: false,
           pets: false, 
           enVenta:true
          
       },
      
     
       {
             nombre: "propiedad cinco",
             src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
             
             descripcion: "casa 2 pisos",
             ubicacion: "santiago centro",
             habitaciones: 4,
             costo: 5000,
             smoke: false,
             pets: false, 
             enVenta:false
          
           
          },
          {
              nombre: "propiedad seis",
              src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
              
              descripcion: "casa 2 pisos",
              ubicacion: "santiago centro",
              habitaciones: 4,
              costo: 5000,
              smoke: false,
              pets: false, 
              enVenta:false
          
          },
          {
              nombre: "propiedad siete",
              src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
              
              descripcion: "casa 2 pisos",
              ubicacion: "santiago centro",
              habitaciones: 4,
              costo: 5000,
              smoke: false,
              pets: false,
              enVenta:false
          
          },
          {
              nombre: "propiedad ocho",
              descripcion: "casa 2 pisos",
              ubicacion: "santiago centro",
              habitaciones: 4,
              costo: 5000,
              smoke: true,
              pets: true, 
              enVenta:false
          
          },
         
        ];
     
     const renderProp = ({ nombre, src, descripcion, ubicacion, smoke, pets, enVenta, }) => {
       return `<div class="propiedades ${enVenta ? "enventa" : ""} ${
         smoke === true ? "peligro" : ""
       }"
         <h2>${nombre}</h2>
         <p>${descripcion}</p>
         <p>${ubicacion}</p>
        <p>${ smoke  ?  "Permitido fumar" : "No se permite fumar"}</p>
        <p>${pets  ?  "se permiten animales" : "No se permiten animales" } </p>
         </div>`;s
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
     
     
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
       