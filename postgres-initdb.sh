#!/bin/sh -e

psql --variable=ON_ERROR_STOP=1 --username "postgres" <<-EOSQL
    CREATE ROLE tester WITH LOGIN PASSWORD 'strongpass';
    CREATE DATABASE "test-db" OWNER = tester;
    GRANT ALL PRIVILEGES ON DATABASE "test-db" TO tester;
EOSQL
