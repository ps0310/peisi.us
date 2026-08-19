import type { Metric } from "../../content/types";
export function MetricDisplay({metric}:{metric:Metric}){return <div className="metric"><strong>{metric.value}</strong><span>{metric.label}</span>{metric.editable&&<small>EDITABLE CONTENT</small>}</div>}
