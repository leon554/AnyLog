import * as SQLite from 'expo-sqlite';
import { createTablesSQL, getMetricsSQL } from './sql';
import { InputMetric, Metric } from './types';


export let db: SQLite.SQLiteDatabase | null = null

function getDB(){
    if(db) return db
    throw new Error("DB has not been initialised")
}

export async function setupDB(){
    if(db) return
    db = await SQLite.openDatabaseAsync("metrics.db")
    await db.execAsync(createTablesSQL);
}

export async function createMetric(metric: InputMetric){
    const db = getDB()

    await db!.runAsync(createTablesSQL, [
        metric.category_id, 
        metric.name, 
        metric.description,
        metric.unit,
        metric.log_frequency
    ])
}

export async function getMetrics(){
    const db = getDB()

    return await db!.getAllAsync<Metric>(getMetricsSQL)
}