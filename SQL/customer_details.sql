DROP TABLE IF EXISTS public."Customer_details";

CREATE TABLE IF NOT EXISTS public."Customer_details"
(
    "CustomerID" character(1) COLLATE pg_catalog."default",
    "Reservations" character(1) COLLATE pg_catalog."default",
    "Name" character(1) COLLATE pg_catalog."default",
    "Email_Id" character(1) COLLATE pg_catalog."default",
    "Phone_num" numeric,
    "Preferences" character(1) COLLATE pg_catalog."default",
    "Payment_history" numeric,
    "Check_In_Date" date,
    "Check_Out_Date" date,
    "Loyalty programs" numeric
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Customer_details"
    OWNER to postgres;
