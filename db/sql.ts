
export const createTablesSQL = /* sql */ `
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS categories (
        id integer primary key not null, 
        name text not null
    );

    CREATE TABLE IF NOT EXISTS metrics (
        id integer primary key not null, 
        category_id integer not null, 
        name text not null,
        description text,
        unit text not null,
        created_at datetime default current_timestamp,
        log_frequency text,
        foreign key (category_id) references categories(id)
    );

    CREATE TABLE IF NOT EXISTS metric_values(
        id integer primary key not null,
        metric_id integer not null,
        created_at datetime default current_timestamp,
        value real not null,
        foreign key (metric_id) references metrics(id)
    )     
`

export const createMetricSQL = /* sql */ `
    INSERT INTO metrics (category_id, name, description, unit, log_frequency)
        VALUES (?, ?, ?, ?, ?);
`
export const getMetricsSQL = /* sql */ `
    select * from metrics
`
