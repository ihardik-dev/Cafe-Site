import Fastify from "fastify";

const app = Fastify({
    logger:true
});

app.get("/api/health",async()=>{
    return {
        success:true,
        message:"Cafe API is running"
    };
});

const start = async()=>{
    try {
        await app.listen({
        port:4000,
        host:"127.0.0.1"
        });
    } catch (error){
        app.log.error(error);
        process.exit(1);
    };
};

start();