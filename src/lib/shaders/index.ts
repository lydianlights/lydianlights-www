import { snoise } from "./utils";

export const defaultShader = `
void main() {
    vec2 uv = 2.0 * (gl_FragCoord.xy / resolution.xy) - 1.0;
    uv.x *= resolution.x / resolution.y;
    vec2 mouse_uv = 2.0 * (mouse_pos.xy / resolution.xy) - 1.0;
    mouse_uv.x *= resolution.x / resolution.y;
    vec3 color = 0.5 + 0.5 * cos(time + uv.xyx + vec3(0.0, 2.0, 4.0));
    if (mouse_active) {
        color = color + 0.15 / distance(uv, mouse_uv);
    }
    gl_FragColor = vec4(color, 1.0);
}
`;

export const mainTitleShader = `
${snoise}
const vec2 OFFSET = vec2(69.0, 420.0);
const float SCALE = 0.7;
const float AMPLITUDE = 0.7;
const int OCTAVES = 8;
const float LACUNARITY = 2.0;
const float GAIN = 0.9;

float fbm(in vec2 p) {
    float t = time / 2.0;
    float value = 0.0;
    float amplitude = AMPLITUDE;
    vec3 q = vec3(p.xy, t);
    
    for (int i = 0; i < OCTAVES; i++) {
        float n = snoise(q);
        n = abs(n);
        n = 1.0 - n;
        n = pow(n, 10.0);
        value += amplitude * n;
        q.xy *= LACUNARITY;
        amplitude *= GAIN;
    }
    return value;
}

float getNoise(in vec2 uv) {
    return fbm(uv + 0.03 * fbm(uv + 0.1));
}

void main() {
    vec2 uv = (2.0 * gl_FragCoord.xy - resolution.xy) / resolution.y;
    vec2 p = SCALE * uv + OFFSET;
    float n = getNoise(p);
    n = pow(n, 2.0);
    n = 0.01 / n;
    vec3 color = vec3(n);
    gl_FragColor = vec4(color, 1.0);
}
`;
