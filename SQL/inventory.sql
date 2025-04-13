DROP TABLE IF EXISTS public."Inventory";

CREATE TABLE IF NOT EXISTS public."Inventory"
(
    "InventoryID" character(2) COLLATE pg_catalog."default",
    "PropertyName" character varying(50) COLLATE pg_catalog."default",
    "Location" character varying(50) COLLATE pg_catalog."default",
    "UnitType" character varying(30) COLLATE pg_catalog."default", -- e.g., Room, Apartment
    "Capacity" numeric,
    "Status" character varying(20) COLLATE pg_catalog."default", -- e.g., Available, Booked
    "PricePerNight" numeric,
    "LastUpdated" date
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Inventory"
    OWNER to postgres;

---Sample inventory items
INSERT INTO public."Inventory" (
    "InventoryID", "PropertyName", "Location", "UnitType", "Capacity", "Status", "PricePerNight", "LastUpdated"
) VALUES
    ('I1', 'Sunset Villa', 'Miami', 'Apartment', 4, 'Available', 150, '2025-04-10'),
    ('I2', 'Ocean Breeze', 'San Diego', 'Room', 2, 'Booked', 90, '2025-04-12'),
    ('I3', 'Mountain Lodge', 'Denver', 'Cabin', 6, 'Maintenance', 200, '2025-04-08');

---Query to check inventory
SELECT * 
FROM public."Inventory"
WHERE "Status" = 'Available';
