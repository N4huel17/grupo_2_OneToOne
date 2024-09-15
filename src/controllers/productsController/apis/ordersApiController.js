const db = require('../../../database/models');

const createOrder = async (req, res) => {
    console.log(req.body);
    try {
        const { usersId, dateOrder, total, statusId } = req.body;
        
        const order = await db.Order.create({
            usersId,
            dateOrder: dateOrder || new Date(),
            total,
            statusId: statusId || 1
        });

        return res.status(200).json({
            ok: true,
            msg: 'Orden creada con éxito',
            order
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Hubo un problema al crear la orden'
        });
    }
};

const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { statusId } = req.body;
    try {
        const order = await db.Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ ok: false, msg: 'Orden no encontrada' });
        }
        order.statusId = statusId;
        await order.save();
        return res.status(200).json({ ok: true, msg: 'Estado de la orden actualizado con éxito' });
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || 'Hubo un problema al actualizar el estado de la orden'
        });
    }
};

module.exports = {
    createOrder,
    updateOrderStatus
};