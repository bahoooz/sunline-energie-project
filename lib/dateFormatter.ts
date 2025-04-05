import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const formatDate = (date: string | Date) => {
  return format(new Date(date), "dd MMMM yyyy", { locale: fr });
};

export const formatDateWithSlash = (date: string | Date) => {
  return format(new Date(date), "dd/MM/yy", { locale: fr });
};
