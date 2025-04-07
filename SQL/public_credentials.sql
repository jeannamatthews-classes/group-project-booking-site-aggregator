DROP TABLE IF EXISTS public."Credentials";

CREATE TABLE IF NOT EXISTS public."Credentials"
(
    "Username" character(10) COLLATE pg_catalog."default" NOT NULL,
    "Password" character(15) COLLATE pg_catalog."default",
    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("Username")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Credentials"
    OWNER to postgres;
