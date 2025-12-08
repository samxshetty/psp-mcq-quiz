class MATHSQuizApp {
    constructor() {
        this.questions = [
  {
    id: 1,
    question: "If φ be the angle between the tangent and radius vector at any point on the curve, r = f(θ) then tan φ equals to:",
    options: ["dr/ds", "r(dθ/ds)", "r(dθ/dr)", "dθ/dr"],
    correct: 2
  },
  {
    id: 2,
    question: "Curvature of a straight line is:",
    options: ["∞", "0", "1", "none of these"],
    correct: 1
  },
  {
    id: 3,
    question: "The angle between the radius vector r = a sin θ and tangent to the curve at any point is φ =",
    options: ["θ/2", "θ", "0", "π/2"],
    correct: 3
  },
  {
    id: 4,
    question: "The radius of curvature of the curve y = x² when x = 0 is:",
    options: ["1/√2", "√2", "2", "1/2"],
    correct: 3
  },
  {
    id: 5,
    question: "The polar form of the cartesian equation x² + y² = 9 is:",
    options: ["r² = 81", "r² = 18", "r = 9", "r = 3"],
    correct: 3
  },
  {
    id: 6,
    question: "The radius of curvature of the curve y = eˣ at the point (0, 1) is:",
    options: ["2√2", "√2", "2", "√2/2"],
    correct: 0
  },
  {
    id: 7,
    question: "For the polar curve r = f(θ), the relation between θ and coordinates (x, y) is:",
    options: ["tan θ = x/y", "tan θ = y/x", "x = r cos θ", "x = r sin θ"],
    correct: 1
  },
  {
    id: 8,
    question: "The radius of curvature for the curve y = f(x) is ρ =",
    options: ["(1+y₂²)^(3/2) / y₁", "(1+y₁²)^(3/2) / y₂", "(1+y₁²)^(2/3) / y₂", "(1-y₁²)^(3/2) / y₂"],
    correct: 1
  },
  {
    id: 9,
    question: "The Maclaurin's series expansion of the function f(x) = eˣ is:",
    options: ["1 - x - x²/2 - x³/6 + ⋯", "1 - x + x²/2 - x³/6 + ⋯", "1 + x + x²/2 + x³/6 + ⋯", "-1 + x - x²/2 + x³/6 - ⋯"],
    correct: 2
  },
  {
    id: 10,
    question: "The radius of curvature at any point of the circle x² + y² = 16 is:",
    options: ["4", "12", "16", "6"],
    correct: 0
  },
  {
    id: 11,
    question: "If φ be the angle between the tangent and radius vector at any point on the curve, r = f(θ) then cot φ is equals to:",
    options: ["r(dr/dθ)", "(1/r)(dr/dθ)", "r(dθ/dr)", "(1/r)(dθ/dr)"],
    correct: 3
  },
  {
    id: 12,
    question: "The Taylor's series expansion of the function f(x) about the point x = a is:",
    options: ["f(a) + (x-a)f'(a)/1! + (x-a)²f''(a)/2! + ⋯", "f(a) - (x-a)f'(a)/1! - (x-a)²f''(a)/2! - ⋯", "f(a) + (x+a)f'(a)/1! + (x+a)²f''(a)/2! + ⋯", "f(x) + (x+a)f'(x)/1! + (x+a)²f''(x)/2! + ⋯"],
    correct: 0
  },
  {
    id: 13,
    question: "If the curvature of a function f(x) is zero, then which of the following functions could be f(x)?",
    options: ["ax + b", "ax² + bx + c", "sin x", "cos x"],
    correct: 0
  },
  {
    id: 14,
    question: "The angle between the radius vector and tangent for the vector r = ae^(θ cot α) is:",
    options: ["tan α", "cot α", "α", "θ"],
    correct: 2
  },
  {
    id: 15,
    question: "The angle between the radius vector and tangent for the vector r = aθ is:",
    options: ["tan⁻¹(1/θ)", "tan⁻¹(θ)", "r", "a/θ"],
    correct: 0
  },
  {
    id: 16,
    question: "The radius of curvature to the curve x = at², y = 2at when t = 0 is:",
    options: ["2a", "a", "2", "a/2"],
    correct: 0
  },
  {
    id: 17,
    question: "The radius of curvature for the curve x = f(t), y = g(t) is ρ =",
    options: ["(x'² + y'²)^(3/2) / (x'y'' + y'x'')", "(x'² - y'²)^(3/2) / (x'y'' - y'x'')", "(x'² + y'²)^(2/3) / (x'y'' + y'x'')", "(x'² + y'²)^(3/2) / (x'y'' - y'x'')"],
    correct: 3
  },
  {
    id: 18,
    question: "The curvature of the function f(x) = x³ - x + 1 at x = 1 is:",
    options: ["6/5", "6/√5", "6/5^(3/2)", "3/5^(3/2)"],
    correct: 2
  },
  {
    id: 19,
    question: "The radius of curvature for the curve r = f(θ) is ρ =",
    options: ["(r² + r₁²)^(3/2) / (r² + 2r₁² - rr₂)", "(r² + r₁²)^(3/2) / (r² - 2r₁² - rr₂)", "(r² - r₁²)^(3/2) / (r² + 2r₁² - rr₂)", "(r² + r₁²)^(2/3) / (r² + 2r₁² - rr₂)"],
    correct: 0
  },
  {
    id: 20,
    question: "If the curvature of a curve increases then, the radius of curvature:",
    options: ["increases", "decreases", "constant", "none of these"],
    correct: 1
  },

  // UNIT-II: Partial Differentiation
  {
    id: 21,
    question: "If f(x, y, z) = x² + xyz + z, then the value of fₓ at (1,1,1)",
    options: ["0", "1", "3", "-1"],
    correct: 2
  },
  {
    id: 22,
    question: "If z = 3x²y + 5y then ∂²z/∂x∂y is:",
    options: ["3xy", "6x", "3x + 5", "6xy"],
    correct: 1
  },
  {
    id: 23,
    question: "The function f(x, y) = x² + y² + 6x - 12 has an extreme value at which one of the following intervals:",
    options: ["(-3, 0)", "(0, 3)", "(0, 0)", "(-3, -3)"],
    correct: 0
  },
  {
    id: 24,
    question: "If u = yˣ then ∂u/∂x is:",
    options: ["yˣ", "yˣ log y", "yˣ log x", "xyˣ⁻¹"],
    correct: 1
  },
  {
    id: 25,
    question: "If f(x, y, z) = x + y + z - log z, then fz(1,1,2)",
    options: ["1/2", "1", "2", "0"],
    correct: 0
  },
  {
    id: 26,
    question: "If f(x, y, z) = cos(xy) + sin(y) + z, then fₓ(1/2, π/2, 7)",
    options: ["-π/(2√2)", "π/(4√3)", "-π/4", "π/√2"],
    correct: 2
  },
  {
    id: 27,
    question: "If x = r cos θ, y = r sin θ then the value of ∂(x,y)/∂(r,θ) is:",
    options: ["r", "1", "0", "r²"],
    correct: 0
  },
  {
    id: 28,
    question: "If u = yˣ then ∂u/∂y is:",
    options: ["yˣ", "yˣ log log y", "yˣ log log x", "xyˣ⁻¹"],
    correct: 0
  },
  {
    id: 29,
    question: "If u = eˣ cos y and v = eˣ sin y the value of J(u,v/x,y) is:",
    options: ["e²ˣ", "e²ˣ/2", "-e²ˣ/2", "e⁻²ˣ"],
    correct: 0
  },
  {
    id: 30,
    question: "If u = x³ + y³, then ∂²u/∂x∂y is:",
    options: ["-3", "3", "0", "3x + 3y"],
    correct: 2
  },
  {
    id: 31,
    question: "If f(x, y, z) = e^(xyz) then fₓ(2,2,2) is:",
    options: ["4e⁸", "2e⁸", "8e⁸", "e⁸"],
    correct: 0
  },
  {
    id: 32,
    question: "If x = uv, y = u/v then ∂(x,y)/∂(u,v) is:",
    options: ["-2u/v", "-2v/u", "0", "1"],
    correct: 0
  },
  {
    id: 33,
    question: "If f(x, y, z) = x² + xyz + z then fₓ at (1,0,1)",
    options: ["1", "2", "3", "0"],
    correct: 1
  },
  {
    id: 34,
    question: "If z = log(x² + y²) then z_y(1,1) is:",
    options: ["1", "2", "0", "3"],
    correct: 0
  },
  {
    id: 35,
    question: "If J₁ = ∂(u,v)/∂(x,y), J₂ = ∂(x,y)/∂(u,v) then J₁J₂ is:",
    options: ["2", "0", "1", "-1"],
    correct: 2
  },
  {
    id: 36,
    question: "If f(x, y) = sin(x) + cos(y) + xy² where x = cos(t); y = sin(t), then df/dt at t = π/2 is:",
    options: ["2", "-2", "1", "0"],
    correct: 1
  },
  {
    id: 37,
    question: "The Jacobian of p, q, r w.r.t x, y, z given p = x + y + z, q = y + z, r = z is:",
    options: ["0", "1", "2", "-1"],
    correct: 1
  },
  {
    id: 38,
    question: "If f(x, y, z) = x² + y² + z² then f_xx(2,4,2) is:",
    options: ["1", "2", "4", "8"],
    correct: 1
  },
  {
    id: 39,
    question: "Given u = x + y, v = xy then the Jacobian ∂(u,v)/∂(x,y) is:",
    options: ["x + y", "0", "x - y", "1"],
    correct: 2
  },
  {
    id: 40,
    question: "If z = 6x²y² + 8x² then ∂z/∂x is:",
    options: ["6y² + 16x", "6x² + 8x²", "12xy² + 16x", "6x² + 6y² + 8x²"],
    correct: 2
  },
  {
    id: 41,
    question: "If f(x, y) = 2x³ - 4y², what is the value of fₓ and f_y at (3,2)",
    options: ["fₓ = 54, f_y = -16", "fₓ = 16, f_y = -54", "fₓ = 54, f_y = 0", "fₓ = -54, f_y = -16"],
    correct: 0
  },
  {
    id: 42,
    question: "If u = x + y and v = x - y the value of J(u,v/x,y) is:",
    options: ["-2", "2", "1", "0"],
    correct: 0
  },
  {
    id: 43,
    question: "If f(x, y) = x²y + x where x = t and y = t² then the value of df/dt when t = 1 is:",
    options: ["2", "4", "1", "5"],
    correct: 1
  },
  {
    id: 44,
    question: "If f(x, y) = sin(xy + x³y) then fₓ at (0,1) is:",
    options: ["2", "5", "1", "0"],
    correct: 2
  },
  {
    id: 45,
    question: "If z = 3xy + 4x², then value of ∂z/∂x is:",
    options: ["3y + 8x", "3x + 4x²", "3xy + 8x", "3y + 3x + 8x"],
    correct: 0
  },
  {
    id: 46,
    question: "Given f_xx = x², f_xy = 8, f_yy = y², then the nature of the stationary point at (√2, √2) is:",
    options: ["Maximum", "Minimum", "Saddle point", "No maxima & minima"],
    correct: 2
  },
  {
    id: 47,
    question: "If f(x, y) = x + y, where x = sin t; y = cos t then the value of df/dt at t = π/2",
    options: ["2", "-2", "1", "0"],
    correct: 3
  },

  // UNIT-III: Ordinary Differential Equations
  {
    id: 48,
    question: "The order and degree of the differential equation (d²y/dx²)³ + (dy/dx)² + y = 0 is _______ and _______.",
    options: ["1 and 3", "2 and 3", "2 and 2", "3 and 3"],
    correct: 1
  },
  {
    id: 49,
    question: "The order and degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² is _____ and ______.",
    options: ["1 and 1", "2 and 1", "2 and 2", "1 and 3"],
    correct: 2
  },
  {
    id: 50,
    question: "The order and degree of the differential equation: d²y/dx² = [(dy/dx)² + 1]/x are ________ and ________.",
    options: ["2 and 1", "1 and 2", "2 and 3", "2 and 2"],
    correct: 0
  },
  {
    id: 51,
    question: "The differential equation having order 3 and degree 2 is ______.",
    options: ["(d³y/dx³)² + x(dy/dx)² = 0", "d³y/dx³ + dy/dx + y = 0", "d³y/dx³ + y = 0", "d³y/dx³ + (dy/dx)² = 0"],
    correct: 0
  },
  {
    id: 52,
    question: "The differential equation having order 2 and degree 1 is _______.",
    options: ["(d²y/dx²)³ + (dy/dx)² = 0", "d²y/dx² + √(dy/dx) = 0", "d²y/dx² + x(dy/dx) + y = 0", "(d²y/dx²)² + dy/dx = 0"],
    correct: 2
  },
  {
    id: 53,
    question: "The integrating factor (I.F.) for dy/dx + (2/x)y = sin x is:",
    options: ["x²", "e²ˣ", "1/x²", "x²"],
    correct: 0
  },
  {
    id: 54,
    question: "The integrating factor for dy/dx + y tan x = x is:",
    options: ["sec x", "sec² x", "tan x", "eˣ ᵗᵃⁿ ˣ"],
    correct: 0
  },
  {
    id: 55,
    question: "For Bernoulli DE dy/dx + P(x)y = Q(x)yⁿ, the linearizing variable is:",
    options: ["y¹⁻ⁿ", "yⁿ⁻¹", "yⁿ", "y⁻ⁿ"],
    correct: 0
  },
  {
    id: 56,
    question: "Which equation is exact?",
    options: ["(y cos x)dx + (x sin y)dy = 0", "(2y)dx + (3x)dy = 0", "(x² - y)dx + (y²)dy = 0", "(eˣy)dx + (eˣ)dy = 0"],
    correct: 3
  },
  {
    id: 57,
    question: "The differential equation (2xy)dx + (x² + 1)dy = 0 is exact because __________.",
    options: ["∂M/∂y = 2x and ∂N/∂x = 2x", "∂M/∂x = ∂N/∂y", "∂M/∂x = 2y and ∂N/∂x = 1", "Both M(x, y) and N(x, y) are differentiable functions of x and y"],
    correct: 0
  },
  {
    id: 58,
    question: "Which of the following function is the solution of the differential equation y' + y = 0.",
    options: ["y = e²ˣ", "y = eˣ", "y = e⁻ˣ", "y = e⁻²ˣ"],
    correct: 2
  },
  {
    id: 59,
    question: "Which of the following function is not a solution of the differential equation y'' + y = 0?",
    options: ["y = 15 cos x", "y = 2 sin x", "y = cos x", "y = sin 2x"],
    correct: 3
  },
  {
    id: 60,
    question: "The complementary function of the differential equation (D - 3)²y = e³ˣ is:",
    options: ["(C₁ + C₂)xe³ˣ", "(C₁ + C₂x)e³ˣ", "(C₁e³ˣ + C₂e⁻³ˣ)", "(C₁x + C₂x²)e³ˣ"],
    correct: 1
  },
  {
    id: 61,
    question: "The differential equation whose auxiliary equation has the roots 0, 1, -1 is:",
    options: ["(D³ + 2D² + D)y = 0", "(D³ - D² - D)y = 0", "(D³ - 2D² - D)y = 0", "(D³ - D)y = 0"],
    correct: 3
  },
  {
    id: 62,
    question: "The differential equation whose auxiliary equation has the roots 1, -1 is:",
    options: ["y'' - y = 0", "y'' + y = 0", "y' + y = 0", "y'' - y' - y = 0"],
    correct: 0
  },
  {
    id: 63,
    question: "The particular integral of (D² + 3D - 4)y = 12e²ˣ is:",
    options: ["e²ˣ", "2e²ˣ", "3e²ˣ", "e²ˣ/2"],
    correct: 0
  },
  {
    id: 64,
    question: "y = C₁e⁻⁶ˣ + C₂e²ˣ is the general solution of the equation:",
    options: ["y'' + 4y' - 12y = 0", "y'' + 4y' + 12y = 0", "y'' - 4y' + 12y = 0", "y'' - 4y' - 12y = 0"],
    correct: 0
  },
  {
    id: 65,
    question: "The integrating factor for the differential equation: dy/dx + y·(1/x) = log x is:",
    options: ["log x", "x", "1/x", "x²"],
    correct: 1
  },
  {
    id: 66,
    question: "For the differential equation y'' - y = eˣ, choose y₁ = eˣ, y₂ = e⁻ˣ. Then the Wronskian W is:",
    options: ["1", "0", "-2", "eˣ - e⁻ˣ"],
    correct: 2
  },
  {
    id: 67,
    question: "The solution of y'' + y = 0 is:",
    options: ["y = C₁eˣ + C₂e⁻ˣ", "y = C₁ cos x + C₂ sin x", "y = C₁x + C₂", "y = C₁eⁱˣ + C₂e⁻ⁱˣ"],
    correct: 1
  },
  {
    id: 68,
    question: "The partial differential equation of the expression z = ax + by, where a and b are arbitrary constants, is:",
    options: ["z = px - qy", "z = p + q", "z = pq", "z = px + qy"],
    correct: 3
  },
  {
    id: 69,
    question: "Which of the following equations is a parabolic partial differential equation?",
    options: ["∂²u/∂x² + ∂²u/∂y² = 0", "∂²u/∂x² + ∂²u/∂y² = f(x, y)", "a²(∂²u/∂x²) = ∂u/∂t", "∂²u/∂x² = 4(∂²u/∂t²)"],
    correct: 2
  },
  {
    id: 70,
    question: "The partial differential equation of the expression 2z = ax² + by² where a and b are arbitrary constants, is:",
    options: ["2z = px + qy", "z = p + q", "z = py + qx", "z = px - qy"],
    correct: 0
  },
  {
    id: 71,
    question: "The following second order partial differential equation is: 2x(∂²u/∂x²) + 3x(∂²u/∂y²) = ∂u/∂x + ∂u/∂y",
    options: ["parabolic", "hyperbolic", "elliptic", "circular"],
    correct: 2
  },
  {
    id: 72,
    question: "The partial differential equation of the expression z = f(x), where f(x) is an arbitrary function, is:",
    options: ["z = ∂z/∂x", "∂z/∂y = 0", "∂z/∂x + ∂z/∂x = 0", "z = ∂z/∂y"],
    correct: 1
  },
  {
    id: 73,
    question: "The following second order partial differential equation is: x(∂²u/∂x²) - x²(∂u/∂x) + ∂u/∂y = 0",
    options: ["parabolic", "hyperbolic", "elliptic", "circular"],
    correct: 0
  },
  {
    id: 74,
    question: "The partial differential equation of the expression z = f(x + y), where f(x + y) is an arbitrary function, is:",
    options: ["p - q = 0", "p + q = 0", "z = p + q", "z = p - q"],
    correct: 0
  },
  {
    id: 75,
    question: "The following second order partial differential equation is: xy(∂²u/∂x∂y) - x²(∂u/∂x) + ∂u/∂y = cos(2x + 3y)",
    options: ["parabolic", "hyperbolic", "elliptic", "circular"],
    correct: 1
  },
  {
    id: 76,
    question: "The partial differential equation of the expression z = aeˣ - beʸ, where a and b are arbitrary constants, is:",
    options: ["z = p + q", "z = p - q", "p + q = 0", "p - q = 0"],
    correct: 3
  },
  {
    id: 77,
    question: "Which of the following equations is a hyperbolic partial differential equation?",
    options: ["∂²u/∂x² + ∂²u/∂y² = 0", "∂²u/∂x² + ∂²u/∂y² = f(x, y)", "a²(∂²u/∂x²) = ∂u/∂t", "∂²u/∂x² = 4(∂²u/∂t²)"],
    correct: 3
  },
  {
    id: 78,
    question: "The partial differential equation of the expression z = ax + beʸ, where a and b are arbitrary constants, is:",
    options: ["z = p + q", "z = px + q", "z = p + qy", "z = p - q"],
    correct: 1
  },
  {
    id: 79,
    question: "Which of the following partial differential equations is not an elliptic partial differential equation?",
    options: ["∂²u/∂x² + ∂²u/∂y² = 0", "∂²u/∂x² + ∂²u/∂y² = f(x, y)", "a²(∂²u/∂x²) = ∂u/∂t", "x²(∂²u/∂x²) + 4y²(∂²u/∂t²) = 4xy"],
    correct: 2
  },
  {
    id: 80,
    question: "The partial differential equation of the expression z = xeᵃ - by, where a and b are arbitrary constants, is:",
    options: ["z = px - qy", "z = px + qy", "z = p + q", "px + qy = 0"],
    correct: 0
  },
  {
    id: 81,
    question: "The following second order partial differential equation is: y²(∂²u/∂x²) - 2xy(∂²u/∂x∂y) + x²(∂²u/∂y²) - x²(∂u/∂x) + ∂u/∂y = 0",
    options: ["parabolic", "hyperbolic", "elliptic", "circular"],
    correct: 0
  },
  {
    id: 82,
    question: "The partial differential equation of the expression z = eʸg(x), where g(x) an arbitrary function, is:",
    options: ["z = ∂z/∂y", "z = ∂z/∂x", "∂z/∂x = 0", "∂z/∂y = 0"],
    correct: 0
  },
  {
    id: 83,
    question: "Which of the following equation is not a hyperbolic partial differential equation?",
    options: ["-2(∂²u/∂x²) - x²(∂²u/∂y²) = 0", "∂²u/∂x² - ∂²u/∂y² = 0", "xy(∂²u/∂x²) - 3xy(∂²u/∂y²) = 0", "∂²u/∂x² - y²(∂²u/∂y²) = 0"],
    correct: 0
  },
  {
    id: 84,
    question: "The partial differential equation of the expression 2z = ax² + by, where a and b are arbitrary constants, is:",
    options: ["2z = px + 2qy", "z = px + qy", "z = 2px + qy", "z = px - qy"],
    correct: 2
  },
  {
    id: 85,
    question: "The following second order partial differential equation is: y²(∂²u/∂x²) - 4xy(∂²u/∂x∂y) - 4x²(∂²u/∂y²) - sin²(xy) = 0",
    options: ["parabolic", "hyperbolic", "elliptic", "circular"],
    correct: 1
  },
  {
    id: 86,
    question: "The partial differential equation of the expression z = ay + bx, where a and b are arbitrary constants, is:",
    options: ["z = px + qy", "z = qx + py", "z = p + q", "z = px - qy"],
    correct: 1
  },
  {
    id: 87,
    question: "Which of the following partial differential equation is an elliptic partial differential equation?",
    options: ["-2(∂²u/∂x²) - x²(∂²u/∂y²) = 0", "∂²u/∂x² - ∂²u/∂y² = 0", "xy(∂²u/∂x²) - 3xy(∂²u/∂y²) = 0", "∂²u/∂x² - y²(∂²u/∂y²) = 0"],
    correct: 0
  },
  {
    id: 88,
    question: "f(x, y) = x² + xyz + z Find fₓ at (1,1,1)",
    options: ["0", "1", "3", "-1"],
    correct: 2
  },
  {
    id: 89,
    question: "f(x, y) = sin(xy) + x² ln(y) Find f_yx at (0, π/2)",
    options: ["33", "0", "3", "1"],
    correct: 3
  },
  {
    id: 90,
    question: "The one-dimensional wave equation is:",
    options: ["∂u/∂t = c²(∂²u/∂x²)", "∂²u/∂t² = c²(∂²u/∂x²)", "∂²u/∂t² = ∂²u/∂x²", "∂u/∂t = ∂u/∂x"],
    correct: 1
  },
  {
    id: 91,
    question: "Which of the following is the standard form of the Laplace equation in 2D?",
    options: ["∂²u/∂x² + ∂²u/∂y² = 0", "∂u/∂x + ∂u/∂y = 0", "∂u/∂x = ∂u/∂y", "∂²u/∂x² - ∂²u/∂y² = 0"],
    correct: 0
  },
  {
    id: 92,
    question: "Which type of PDE is the wave equation?",
    options: ["Parabolic", "Elliptic", "Hyperbolic", "None of the above"],
    correct: 2
  },
  {
    id: 93,
    question: "The direct integration method is applicable when the PDE is:",
    options: ["Linear and homogeneous", "Linear and first order", "Non-linear", "Of second order with constant coefficients"],
    correct: 1
  },
  {
    id: 94,
    question: "Direct integration method solves PDEs by:",
    options: ["Using Fourier series", "Directly integrating partial derivatives step by step", "Transforming to ODEs", "Using separation of variables"],
    correct: 1
  },

  // UNIT-IV: Multiple Integrals
  {
    id: 95,
    question: "The value of ∫₀¹ ∫₀ˣ dy dx is:",
    options: ["1", "2", "0", "1/2"],
    correct: 3
  },
  {
    id: 96,
    question: "The value of ∫₀¹ ∫₀^√x dy dx = ________________",
    options: ["2/3", "3/2", "1/3", "3"],
    correct: 0
  },
  {
    id: 97,
    question: "The value of ∫₀^(π/2) ∫₁² r dr dθ = ______________",
    options: ["π/4", "π", "π/2", "3π/4"],
    correct: 3
  },
  {
    id: 98,
    question: "Which of the following formula can be used to find area of a plane region in the cartesian form?",
    options: ["A = ∬ x dx dy", "A = ∬ xy dx dy", "A = ∬ f(x, y)dx dy", "A = ∬ dx dy"],
    correct: 3
  },
  {
    id: 99,
    question: "The value of ∫₋₁¹ ∫₀¹ ∫₋₁⁰ dx dy dz =",
    options: ["2", "0", "-1", "1"],
    correct: 0
  },
  {
    id: 100,
    question: "∫₀¹ ∫₀^(x²) dy dx represents:",
    options: ["The area bounded by the parabola y = x², the line x = 1 and the x-axis.", "The area bounded by the parabolas y = x² and y² = x.", "The area bounded by the parabola y = x², the line y = 1 and the y-axis.", "The area bounded by the parabola y = x², the line y = 1 and the x-axis"],
    correct: 0
  },
  {
    id: 101,
    question: "∫₀¹ ∫₀ˣ eʸ dy dx =",
    options: ["e + 2", "e", "e - 2", "2e"],
    correct: 2
  },
  {
    id: 102,
    question: "The value of ∫₀ᶜ ∫₀ᵇ ∫₀ᵃ dz dy dx is:",
    options: ["ab/c", "ab/(2c)", "abc", "ab"],
    correct: 2
  },
  {
    id: 103,
    question: "Area of a region R in terms of polar co-ordinate is:",
    options: ["A = ∬ᴿ r dr dθ", "A = ∬ᴿ dr dθ", "A = ∬ᴿ r² dr dθ", "A = ∬ᴿ (r + 1) dr dθ"],
    correct: 0
  },
  {
    id: 104,
    question: "The value of ∫₀¹ ∫₀² xy dx dy is:",
    options: ["2", "4", "0", "1"],
    correct: 3
  },
  {
    id: 105,
    question: "After changing the order of integration, the integral value of ∫₀^∞ ∫ₓ^∞ (e⁻ʸ/y) dy dx is same as:",
    options: ["∫₀^∞ ∫₀ʸ (e⁻ʸ/y) dx dy", "∫₀^∞ ∫₀^∞ (e⁻ʸ/y) dx dy", "∫₀ˣ ∫₀ʸ (e⁻ʸ/y) dx dy", "∫₀¹ ∫ₓ^∞ (e⁻ʸ/y) dx dy"],
    correct: 0
  },
  {
    id: 106,
    question: "In polar form, the integral ∫₀^∞ ∫₀^∞ e⁻⁽ˣ²⁺ʸ²⁾ dx dy is equal to:",
    options: ["∫₀^(π/2) ∫₀^∞ e⁻ʳ² dr dθ", "∫₀^(π/2) ∫₀^∞ e⁻ʳ dr dθ", "∫₀^(π/2) ∫₀^∞ e⁻⁽ʳ²⁺θ²⁾ dr dθ", "∫₀^(π/2) ∫₀^∞ re⁻ʳ² dr dθ"],
    correct: 3
  },
  {
    id: 107,
    question: "The value of γ(1/2) =",
    options: ["√π/2", "√π", "√π/2", "π/2"],
    correct: 1
  },
  {
    id: 108,
    question: "Which of the following is true?",
    options: ["γ(n + 1) = nγ(n)", "γ(n - 1) = nγ(n)", "γ(n + 1) = n + 2γ(n)", "γ(n + 2) = nγ(n)"],
    correct: 0
  },
  {
    id: 109,
    question: "The value of ∫₀^(π/2) sin³x cos⁴x dx is:",
    options: ["3π/280", "2/3", "2/35", "35/2"],
    correct: 2
  },
  {
    id: 110,
    question: "The value of β(3, 2) is:",
    options: ["1/12", "1/2", "1/10", "1/24"],
    correct: 0
  },
  {
    id: 111,
    question: "For any m > 0, β(m, 1) =",
    options: ["1", "m", "0", "1/m"],
    correct: 3
  },
  {
    id: 112,
    question: "If m, n > 0 then β(m,n+1)/β(m+1,n) equals:",
    options: ["m/n", "n/m", "1", "0"],
    correct: 1
  },
  {
    id: 113,
    question: "The value β(1/2, 1/2) is:",
    options: ["1", "π", "-1", "√π"],
    correct: 1
  },
  {
    id: 114,
    question: "The value of ∫₀^∞ e⁻ˣ² dx is:",
    options: ["√π", "√π/2", "√π/2", "π/2"],
    correct: 1
  }
];

        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 20);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 20`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 20) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 20 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 20 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 20) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('MathsQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('MathsQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('MathsQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 20).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('MathsQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Maths_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MATHSQuizApp();
});