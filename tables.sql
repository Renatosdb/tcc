-- Table: public.produto

-- DROP TABLE public.produto;

CREATE TABLE IF NOT EXISTS public.produto
(
    id bigint NOT NULL,
    name character(255) COLLATE pg_catalog."default",
    created_at date,
    description text COLLATE pg_catalog."default",
    value money,
    product_type character(255) COLLATE pg_catalog."default",
    CONSTRAINT "Produto_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.produto
    OWNER to postgres;



-- Table: public.usuario

-- DROP TABLE public.usuario;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id bigint NOT NULL,
    name character(255) COLLATE pg_catalog."default",
    role character(255) COLLATE pg_catalog."default",
    login character(255) COLLATE pg_catalog."default",
    password character(255) COLLATE pg_catalog."default",
    created_at date,
    CONSTRAINT "Usuario_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.usuario
    OWNER to postgres;



-- Table: public.vendas

-- DROP TABLE public.vendas;

CREATE TABLE IF NOT EXISTS public.vendas
(
    id bigint,
    product_id bigint,
    user_id bigint,
    value numeric,
    amount numeric,
    created_at date,
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.produto (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.vendas
    OWNER to postgres;


-- Table: public.estoque

-- DROP TABLE public.estoque;

CREATE TABLE IF NOT EXISTS public.estoque
(
    id bigint NOT NULL,
    product_type character(1) COLLATE pg_catalog."default",
    amount numeric,
    value numeric,
    created_at date,
    CONSTRAINT product_id PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.estoque
    OWNER to postgres;


-- Table: public.endereco

-- DROP TABLE public.endereco;

CREATE TABLE IF NOT EXISTS public.endereco
(
    id bigint NOT NULL,
    address_number character(255) COLLATE pg_catalog."default",
    address_complement character(255) COLLATE pg_catalog."default",
    address_district character(255) COLLATE pg_catalog."default",
    city character(255) COLLATE pg_catalog."default",
    zip_code character(255) COLLATE pg_catalog."default",
    uf character(255) COLLATE pg_catalog."default",
    address character(255) COLLATE pg_catalog."default",
    user_id bigint,
    CONSTRAINT endereco_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.endereco
    OWNER to postgres;



-- Table: public.carrinho

-- DROP TABLE public.carrinho;

CREATE TABLE IF NOT EXISTS public.carrinho
(
    id bigint NOT NULL,
    product_id bigint,
    user_id bigint,
    amount numeric,
    CONSTRAINT "Carrinho_pkey" PRIMARY KEY (id),
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.produto (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.carrinho
    OWNER to postgres;


-- Table: public.bancos

-- DROP TABLE public.bancos;

CREATE TABLE IF NOT EXISTS public.bancos
(
    id bigint NOT NULL,
    type_card character(255) COLLATE pg_catalog."default",
    name_card character(255) COLLATE pg_catalog."default",
    number_card character(255) COLLATE pg_catalog."default",
    expiration_date date,
    cvv character(255) COLLATE pg_catalog."default",
    user_id bigint,
    CONSTRAINT bancos_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.bancos
    OWNER to postgres;                    



-- Table: public.favoritos

-- DROP TABLE public.favoritos;

CREATE TABLE IF NOT EXISTS public.favoritos
(
    id bigint,
    user_id bigint,
    product_id bigint,
    CONSTRAINT product_id FOREIGN KEY (product_id)
        REFERENCES public.produto (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.favoritos
    OWNER to postgres;