export type Unit = "mm"|"cm"|"m"|"km"|"inch"|"foot"|"yard"|"mile"|"nautical_mile"|"mm²"|"cm²"|"m²"|"km²"|"inch²"|"foot²"|"acre"|"hectare"|"ml"|"cl"|"dl"|"l"|"m³"|"inch³"|"foot³"|"gallon"|"quart"|"pint"|"cup"|"mg"|"g"|"kg"|"ton"|"oz"|"lb"|"stone"|"°C"|"°F"|"K"|"ms"|"s"|"min"|"h"|"day"|"week"|"month"|"year"|"m/s"|"km/h"|"mph"|"knot"|"m/s²"|"g"|"J"|"kJ"|"cal"|"kcal"|"W"|"kW"|"hp"|"Pa"|"kPa"|"bar"|"psi"|"atm"|"mmHg"|"torr"|"N"|"kgf"|"lbf"|"V"|"mV"|"A"|"mA"|"Ω"|"kΩ"|"F"|"H"|"C"|"Hz"|"kHz"|"MHz"|"GHz"|"°"|"rad"|"grad"|"turn"|"bit"|"byte"|"KB"|"MB"|"GB"|"TB"|"PB"|"bpm"|"steps"|"reps"|"sets"|"kg/m²"|"mg/dL"|"mmol/L"|"IU"|"µg"|"ng"|"%"|"ratio"|"ppm"|"ppb"|"lumen"|"lux"|"cd"|"mol"|"rad"|"Sv"|"Gy"|"unit";
export const units: string[] = ["mm","cm","m","km","inch","foot","yard","mile","nautical_mile","mm²","cm²","m²","km²","inch²","foot²","acre","hectare","ml","cl","dl","l","m³","inch³","foot³","gallon","quart","pint","cup","mg","g","kg","ton","oz","lb","stone","°C","°F","K","ms","s","min","h","day","week","month","year","m/s","km/h","mph","knot","m/s²","g","J","kJ","cal","kcal","W","kW","hp","Pa","kPa","bar","psi","atm","mmHg","torr","N","kgf","lbf","V","mV","A","mA","Ω","kΩ","F","H","C","Hz","kHz","MHz","GHz","°","rad","grad","turn","bit","byte","KB","MB","GB","TB","PB","bpm","steps","reps","sets","kg/m²","mg/dL","mmol/L","IU","µg","ng","%","ratio","ppm","ppb","lumen","lux","cd","mol","rad","Sv","Gy","unit"];
export const frequencies = ["None", "Daily", "Weekly", "Monthly"]

export interface Metric{
    id: number,
    category_id: number | null,
    name: string,
    description: string | null,
    unit: string,
    created_at: string,
    log_frequency: string | null
}

export type InputMetric = Omit<Metric, "id" | "created_at">


