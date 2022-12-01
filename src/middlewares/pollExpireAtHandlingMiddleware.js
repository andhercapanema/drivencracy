import { format, add, sub, parse } from "date-fns";
import ptBR from "date-fns/locale/pt-BR/index.js";

export default function pollExpireAtHandling(req, res, next) {
    const { newPoll } = res.locals;

    if (newPoll.expireAt === "") {
        newPoll.expireAt = format(
            add(new Date(), { days: 30 }),
            "yyyy-MM-dd HH:mm",
            {
                locale: ptBR,
            }
        );
    }

    const parsedExpireAt = sub(
        parse(newPoll.expireAt, "yyyy-MM-dd HH:mm", new Date(), {
            locale: ptBR,
        }),
        { hours: 3 }
    );

    newPoll.expireAt = parsedExpireAt;

    next();
}
