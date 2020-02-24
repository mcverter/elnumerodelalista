create table dn (
    list_number INTEGER NOT NULL,
    list_date DATE default NOW() UNIQUE
)