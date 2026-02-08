import { format, parse } from "date-fns"
import { ptBR } from "date-fns/locale";

export const formatDateUS = (date: string) => {
    return parse(date.trim(), 'dd/MM/yyyy', new Date());
}

export const formatDateBR = (date: string) => {
    const dateParsed = parse(date.trim(), 'dd/MM/yyyy', new Date());
    return format(dateParsed, "d 'de' MMMM 'de' yyyy", { locale: ptBR });
}