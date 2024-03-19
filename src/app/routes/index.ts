import express from "express";
import { messageRoutes } from "../modules/message/message.route";
import { questionRoutes } from "../modules/QuestionList/questionList.route";
import { userRoutes } from "../modules/User/user.routes";
import { hallRoomPostRoutes } from "../modules/hallRoomPost/hallRoom.route";
import { paidImageRoutes } from "../modules/paidImage/paidImage.route";
import { paidVideoRoutes } from "../modules/paidVideo/paidVideo.route";
import { clientRoutes } from "../modules/client/client.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/message",
    route: messageRoutes,
  },
  {
    path: "/question",
    route: questionRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/client",
    route: clientRoutes,
  },
  {
    path: "/hall_room_post",
    route: hallRoomPostRoutes,
  },
  {
    path: "/paid_image",
    route: paidImageRoutes,
  },
  {
    path: "/paid_video",
    route: paidVideoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
