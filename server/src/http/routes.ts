import { Router } from "express";
import { EventService } from "../events/event.service";


export function createRoutes(eventService: EventService) {
    const  router = Router();

    router.get("/health", (_, res) => {
        res.json({status: "ok"});
    });

    router.get("/events", (_, res) => {
        res.json(eventService.getHistory());
    });

    return router;
}