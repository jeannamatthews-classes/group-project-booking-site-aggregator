-- Table: public.Customer_details

DROP TABLE IF EXISTS public."Customer_details";

CREATE TABLE IF NOT EXISTS public."Customer_details"
(
    "Reservations" character(20) COLLATE pg_catalog."default",
    "Name" character(20) COLLATE pg_catalog."default",
    "Email_Id" character(20) COLLATE pg_catalog."default",
    "Phone_num" numeric(10,0),
    "Preferences" character(20) COLLATE pg_catalog."default",
    "Payment_history" numeric(10,0),
    "Check_In_Date" date,
    "Check_Out_Date" date,
    "Loyalty_programs" numeric(10,0),
    "CustomerID" integer NOT NULL DEFAULT nextval('"Customer_details_CustomerID_seq"'::regclass),
    "Inventory" character(50) COLLATE pg_catalog."default",
    "Inventory_price" numeric(10,2),
    CONSTRAINT "Customer_details_pkey" PRIMARY KEY ("CustomerID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Customer_details"
    OWNER to postgres;
