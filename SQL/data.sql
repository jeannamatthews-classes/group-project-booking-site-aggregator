CREATE DATABASE "Booking_site_aggregator_DB"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en-US'
    LC_CTYPE = 'en-US'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE IF NOT EXISTS public."Staff_details"
(
    "ID" integer NOT NULL,
    "Name" character(100) COLLATE pg_catalog."default" NOT NULL,
    "Gender" character(7) COLLATE pg_catalog."default" NOT NULL,
    "Phone_number" numeric(10,0) NOT NULL,
    "Email_Id" character(50) COLLATE pg_catalog."default" NOT NULL,
    "DOB" date NOT NULL,
    "Shift" character(50) COLLATE pg_catalog."default",
    "Attends" character(50) COLLATE pg_catalog."default",
    CONSTRAINT "Staff_details_pkey" PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Staff_details"
    OWNER to postgres;