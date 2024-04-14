const db = require('../database/models');
const fetch = require('node-fetch').default;

module.exports = {
    index: (req, res) => {
        db.products.findAll()
            .then(products => {
                return res.render('index', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    cart: (req, res) => {
        db.products.findAll()
            .then(products => {
                return res.render('productCart', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    admin: (req, res) => {
        let totalProductos;
        let totalUsuarios;
        let totalOrdenes;
        let ultimoProducto;
        let categorias;
    
        const obtenerTotalProductos = db.products.findAll({
                include: ['category', 'colors', 'sizes'],
            })
            .then(products => {
                totalProductos = products.length;
            })
            .catch(error => {
                console.log(error);
                totalProductos = 0; // Si hay un error, establece el total de productos en 0
            });
    
        const obtenerTotalUsuarios = db.users.count()
            .then(count => {
                totalUsuarios = count;
            })
            .catch(error => {
                console.log(error);
                totalUsuarios = 0; // Si hay un error, establece el total de usuarios en 0
            });
    
        const obtenerTotalOrdenes = db.Order.count()
            .then(count => {
                totalOrdenes = count;
            })
            .catch(error => {
                console.log(error);
                totalOrdenes = 0; // Si hay un error, establece el total de órdenes en 0
            });
    
        const obtenerUltimoProducto = db.products.findOne({
                include: ['category', 'colors', 'sizes'],
                order: [['createdAt', 'DESC']] // Ordena por fecha de creación en orden descendente
            })
            .then(producto => {
                ultimoProducto = producto;
            })
            .catch(error => {
                console.log(error);
                ultimoProducto = null; // Si hay un error, establece el último producto en null
            });
    
        const obtenerCategorias = db.category.findAll()
            .then(cats => {
                categorias = cats;
            })
            .catch(error => {
                console.log(error);
                categorias = []; // Si hay un error, establece categorías como un array vacío
            });
    
        // Espera a que todas las promesas se resuelvan antes de renderizar la vista
        Promise.all([obtenerTotalProductos, obtenerTotalUsuarios, obtenerTotalOrdenes, obtenerUltimoProducto, obtenerCategorias])
            .then(() => {
                return res.render('indexDashboard', {
                    totalProductos,
                    totalUsuarios,
                    totalOrdenes,
                    ultimoProducto,
                    categorias
                });
            })
            .catch(error => console.log(error));
    },
    productos: (req, res) => {
        db.products.findAll({
                include: ['category', 'colors', 'sizes'],
            })
            .then(products => {
                return res.render('dashboard', {
                    products
                });
            })
            .catch(error => console.log(error));
    },
    Usersadmin: async (req, res) => {
        try {
       

            const users= await db.users.findAll({
                include:['role']
           
            })
            const roles= await db.roles.findAll()

            res.render('usersControl', {
                users,
                roles
            }); // Pasar los usuarios a la vista usersControl
        } catch (error) {
            console.error(error);
            res.status(500).send('Error obteniendo usuarios');
        }
    },
    updateUserRole: (req, res) => {
        const { id } = req.params;
        const { role } = req.body;
    
        db.users.findByPk(id)
          .then(user => {
            if (!user) {
              return res.status(404).send("Usuario no encontrado");
            }
    
           
            user.role = role;
    
           
            return user.save();
          })
          .then(updatedUser => {
          
            const successMessage = "Rol actualizado exitosamente";
            return res.redirect('/admin/users'); 
          })
          .catch(error => {
            console.error(error);
            return res.status(500).send("Error interno del servidor");
          });
      },
      eliminarUsuario: (req, res) => {
        const { id } = req.params;
      
        db.users.findByPk(id)
          .then(user => {
            if (!user) {
              return res.status(404).send("Usuario no encontrado");
            }
      
           
            return user.destroy();
          })
          .then(() => {
        
            const successMessage = "Usuario eliminado exitosamente"; 
            return res.redirect('/admin/users'); 
          })
          .catch(error => {
            console.error(error);
            return res.status(500).send("Error interno del servidor");
          });
      },
      ordenes: (req, res) => {
        db.Order.findAll({
            include: ['status']
        })
        .then(ordenes => {
            // Consulta para obtener todos los estados posibles
            db.Status.findAll()
            .then(statuses => {
                return res.render('order', {
                    ordenes,
                    statuses
                });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).send("Error interno del servidor");
            });
        })
        .catch(error => {
            console.log(error);
            return res.status(500).send("Error interno del servidor");
        });
    },
    updateOrderStatus: (req, res) => {
        const { id } = req.params;
        const { status } = req.body;
    
        db.Order.findByPk(id)
            .then(order => {
                if (!order) {
                    return res.status(404).send("Orden no encontrada");
                }
    
                order.statusId = status;
    
                return order.save();
            })
            .then(updatedOrder => {
                // Enviar una respuesta 200 OK sin contenido
                return res.sendStatus(200);
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send("Error interno del servidor");
            });
    },
  
    searchAdmin: (req, res) => {

        const { keyword } = req.query

        db.products.findAll({
                where: {
                    name: {
                        [Op.substring]: keyword
                    }
                },
                include: ['category']
            })
            .then(result => {
                return res.render('dashboard', {
                    products: result,
                    keyword
                });
            })
            .catch(error => console.log(error));
    },
    search: (req, res) => {

        const { keyword } = req.query

        db.Products.findAll({
                where: {
                    name: {
                        [Op.substring]: keyword
                    }
                },
                include: ['products', 'category']
            })
            .then(result => {
                return res.render('dashboard', {
                    products: result,
                    keyword
                });
            })
            .catch(error => console.log(error));
    },
    

      
}