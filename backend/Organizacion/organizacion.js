const {PrismaClient} = require('@prisma/client');


const prisma = new PrismaClient();
const getOrganizations = async (req, res) => {
    const getOrganizations = async () => {

        const organizations = await prisma.organizacion.findMany({
            where: {
                aprobado: true,
            }
        });
        res.send(JSON.stringify(organizations))
    };


    await getOrganizations()
        .catch((e) => {
            res.status(500).send('Fallo al conectarse a la bd');
        })
        .finally(async () => {
            await prisma.$disconnect()
        });
};
const addOrganization = async (req, res) => {
    const addOrganization = async () => {

        await prisma.organizacion.create({
            data: {
                nombre:'',
                descripcion:'',
                direccion:'',
                imagen:'',
                aprobado:false
            },

        });
        res.send(JSON.stringify(organizations))
    };


    await addOrganization()
        .catch((e) => {
            res.status(500).send('Fallo al conectarse a la bd');
        })
        .finally(async () => {
            await prisma.$disconnect()
        });
};
module.exports = {
    getOrganizations
}