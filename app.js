class BEQuizApp {
    constructor() {
        this.questions = [
 {
    id: 1,
    question: "The voltage at which forward current through the diode starts increasing rapidly is called as",
    options: ["Cut in voltage", "Breakdown voltage", "Saturation voltage", "Cut off voltage"],
    correct: 0
  },
  {
    id: 2,
    question: "Smaller the ripple factor, the output will have higher components of",
    options: ["Spike", "AC", "DC", "pulse"],
    correct: 2
  },
  {
    id: 3,
    question: "The efficiency of full wave rectifier is about",
    options: ["0.46", "81.2", "1.21", "40.6"],
    correct: 1
  },
  {
    id: 4,
    question: "When the p-n junction diode is forward biased, it offers",
    options: ["High resistance", "Low resistance", "Low voltage", "High voltage"],
    correct: 1
  },
  {
    id: 5,
    question: "Zener diode is mainly used as",
    options: ["Amplifier", "Comparator", "Oscillator", "Voltage regulator"],
    correct: 3
  },
  {
    id: 6,
    question: "The efficiency of half wave rectifier is about",
    options: ["81.2%", "46 %", "40.6 %", "1.21%"],
    correct: 2
  },
  {
    id: 7,
    question: "The r.m.s value of load current in a full wave rectifier is",
    options: ["0.707 Im", "0.5π", "0.5 Im", "0.3183 Im"],
    correct: 0
  },
  {
    id: 8,
    question: "The amount of ripples present at the output of half wave rectifier is",
    options: ["1.21", "0.81", "0.46", "0.50"],
    correct: 0
  },
  {
    id: 9,
    question: "The amount of ripples present at the output of a full wave rectifier is",
    options: ["81%", "48%", "42%", "52%"],
    correct: 1
  },
  {
    id: 10,
    question: "A silicon diode is connected in series to a dc supply of 2 volts and resistance of 13 Ω, the current in the circuit is",
    options: ["1.5A", "0.55 A", "0.45 A", "0.10A"],
    correct: 3
  },
  {
    id: 11,
    question: "The DC load current of a half wave rectifier is",
    options: ["2Idc/π", "2Im/π", "Im/π", "1.414/π"],
    correct: 2
  },
  {
    id: 12,
    question: "A sinusoidal voltage of peak value 40V is applied to a half wave rectifier with RL = 800 Ω and Rf = 8 Ω. The peak value of the current is",
    options: ["4.95 mA", "49.5 mA", "0.495 mA", "4.95 A"],
    correct: 1
  },
  {
    id: 13,
    question: "A silicon diode is connected in series to a dc supply of 5 Volts and resistance of 1.5 kΩ, the current in the circuit is",
    options: ["3.86 mA", "2.86 mA", "0.38 mA", "1.5mA"],
    correct: 1
  },
  {
    id: 14,
    question: "Average DC load voltage of a full wave Bridge rectifier is",
    options: ["Im/0.5", "2Im/π", "Im/0.707", "2Vm/π"],
    correct: 3
  },
  {
    id: 15,
    question: "In the voltage regulator shown below, if the current through the load decreases",
    options: ["The current through R1 will increase.", "The current through R1 will decrease.", "Zener diode current will increase.", "Zener diode current will decrease"],
    correct: 2
  },
  {
    id: 16,
    question: "In the circuit, what is the output voltage?",
    options: ["50 V", "70 V", "120 V", "170 V"],
    correct: 0
  },
  {
    id: 17,
    question: "The r.m.s value of load current in a half wave rectifier is",
    options: ["0.5 Im", "0.5π", "0.707 Im", "0.3183 Im"],
    correct: 0
  },
  {
    id: 18,
    question: "A germanium diode is connected in series to a dc supply of 4volts and resistance of 2 kΩ, the current in the circuit is",
    options: ["1.85 mA", "1.45mA", "0.185 mA", "18.5 mA"],
    correct: 0
  },
  {
    id: 19,
    question: "A zener diode of 10V is connected to a supply of 20V through a series resistance of 200 ohms. With no load, current through the zener is",
    options: ["500 mA", "50 mA", "5 A", "400 mA"],
    correct: 1
  },
  {
    id: 20,
    question: "A germanium diode is connected in series to a dc supply of 7.5 volts and resistance of 1.3 kΩ, the current in the circuit is",
    options: ["5.53 mA", "5.53 A", "5.35 mA", "1.53 mA"],
    correct: 0
  },
  {
    id: 21,
    question: "A silicon and a germanium diodes are connected in series to a dc supply of 8 volts and resistance of 2.5 kΩ, the current in the circuit is",
    options: ["2.8 A", "28 mA", "0.28 mA", "2.8 mA"],
    correct: 3
  },
  {
    id: 22,
    question: "In the breakdown region, zener diode behaves like a source of",
    options: ["Constant resistance", "Constant current", "Constant voltage", "Constant power"],
    correct: 2
  },
  {
    id: 23,
    question: "Ripple factor for a full wave bridge rectifier with capacitor filter is",
    options: ["1/(4√3fCRL)", "1/(2√3fCRL)", "1/(2fCRL)", "1/(4fCRL)"],
    correct: 0
  },
  {
    id: 24,
    question: "Which of the following statement is correct?",
    options: ["Rectification efficiency of a half wave rectifier is equal to that of the Full wave rectifier", "All of the given options", "Rectification efficiency of a half wave rectifier is lower than that of the Full wave rectifier", "Rectification efficiency of a half wave rectifier is higher than that of the Full wave rectifier"],
    correct: 2
  },
  {
    id: 25,
    question: "In a Full wave bridge rectifier, the number of diodes conducting at a time during one half cycle of the input signal is",
    options: ["2", "4", "3", "1"],
    correct: 0
  },
  {
    id: 26,
    question: "The doping level in a zener diode is ............... that of a PN diode.",
    options: ["The same as", "Less than", "More than", "None of the given options"],
    correct: 2
  },
  {
    id: 27,
    question: "The basic purpose of filter is to",
    options: ["Minimize variations in ac input signal", "Suppress harmonics in rectified output", "Remove ripples from the rectified output", "Stabilize dc output voltage"],
    correct: 2
  },
  {
    id: 28,
    question: "The basic reason why a full wave rectifier has a twice the efficiency of a half wave rectifier is that",
    options: ["It makes use of transformer", "Its ripple factor is much less", "It utilizes both half-cycle of the input", "Its output frequency is double the line frequency"],
    correct: 2
  },
  {
    id: 29,
    question: "In a full wave rectifier, if the input frequency is 50 Hz, then output frequency will be",
    options: ["50 Hz", "75 Hz", "100 Hz", "200 Hz"],
    correct: 2
  },
  {
    id: 30,
    question: "To get a peak load voltage of 40V out of a bridge rectifier. What is the approximate rms value of secondary voltage?",
    options: ["0 V", "14.4 V", "28.3 V", "56.6 V"],
    correct: 2
  },

  // UNIT 2 - BJT and MOSFET
  {
    id: 31,
    question: "Total emitter current in BJT is",
    options: ["IC + ICBO", "IC+ IE", "IB + IC", "IB - IC"],
    correct: 2
  },
  {
    id: 32,
    question: "Which is not a MOSFET terminal?",
    options: ["Gate", "Source", "Drain", "Base"],
    correct: 3
  },
  {
    id: 33,
    question: "What is the collector current for a C-E configuration with a beta of 100 and a base current of 30 μA?",
    options: ["3μA", "3 mA", "30 μA", "30 mA"],
    correct: 1
  },
  {
    id: 34,
    question: "In a CE amplifier circuit, the output signal generated with a phase shift of",
    options: ["180°", "90°", "0°", "270°"],
    correct: 0
  },
  {
    id: 35,
    question: "For a BJT, the following statement is true",
    options: ["IB ≅ IE", "IB ≅ IC", "IE ≅ IC", "IB ≅ αIE"],
    correct: 2
  },
  {
    id: 36,
    question: "Which transistor element is used in CMOS logic.",
    options: ["MOSFET", "JFET", "BJT", "Diode"],
    correct: 0
  },
  {
    id: 37,
    question: "A transistor has a beta of 200 and a base current of 40 μA in CE configuration. Then the collector current is",
    options: ["8 mA", "8μA", "80 μA", "80 mA"],
    correct: 0
  },
  {
    id: 38,
    question: "BJT is made to work as an amplifier when it is operated in ....... region",
    options: ["Inverted mode", "Saturation", "Cut off", "Active"],
    correct: 3
  },
  {
    id: 39,
    question: "A transistor has IB = 0.08 mA and IE = 9.60 mA. The value of β is",
    options: ["129", "119", "960", "100"],
    correct: 1
  },
  {
    id: 40,
    question: "The enhancement type MOSFET works only with ________.",
    options: ["large negative gate voltage", "large positive source voltage", "large positive gate voltage", "large negative drain voltage"],
    correct: 2
  },
  {
    id: 41,
    question: "A transistor has IB = 0.06 mA and IE = 9.00 mA. The value of β is",
    options: ["149", "129", "960", "100"],
    correct: 0
  },
  {
    id: 42,
    question: "In CE configuration of BJT, output characteristics is plotted by taking",
    options: ["VCE verses IC for constant IE", "VCE verses IC for constant IB", "VCE verses IC for constant VCB", "VCE verse IE for constant IC"],
    correct: 1
  },
  {
    id: 43,
    question: "A transistor has IB = 0.06 mA and IE = 9.00 mA. The value of α is",
    options: ["9.9", "0.99", "990", "100"],
    correct: 1
  },
  {
    id: 44,
    question: "The MOSFET stands for",
    options: ["Metal oxide semiconductor FET", "Metal oxide surface FET", "Metal oxidized selenium FET", "Metal of surface FET"],
    correct: 0
  },
  {
    id: 45,
    question: "When the transistor operates as an amplifier, it is operating at",
    options: ["In the active region", "In the cut-off region", "In the Ohmic region", "In the Saturation region"],
    correct: 0
  },
  {
    id: 46,
    question: "When BJT operates as a switch, it is operated in ____________",
    options: ["Cut-off and Saturation region", "Active and saturation region", "Active and cut-off region", "Saturation and active region"],
    correct: 0
  },
  {
    id: 47,
    question: "The collector to base current gain β in terms of α is defined as",
    options: ["α/(1 - α)", "α/(1 + α)", "β/(1 + α)", "β/(1 + β)"],
    correct: 0
  },
  {
    id: 48,
    question: "The collector to emitter current gain α in terms of β is defined as",
    options: ["β/(1 + β)", "α/(1 - α)", "β/(1 + α)", "α/(1 + α)"],
    correct: 0
  },
  {
    id: 49,
    question: "The leakage current in a transistor is due to:",
    options: ["Zener effect", "Majority charge carriers", "Minority charge carriers", "Breakdown"],
    correct: 2
  },
  {
    id: 50,
    question: "A bipolar junction transistor is a",
    options: ["Current controlled device", "Voltage controlled device", "Resistance controlled device", "Junction controlled device"],
    correct: 1
  },
  {
    id: 51,
    question: "The value of α of a transistor is ..........",
    options: ["more than 1", "Less than 1", "0.76 to 0.96", "1"],
    correct: 1
  },
  {
    id: 52,
    question: "The value of β for a transistor is generally ....................",
    options: ["1", "Less than 1", "Between 20 and 500", "Above 500"],
    correct: 2
  },
  {
    id: 53,
    question: "The value of β for a silicon transistor given the collector current as 1 mA and base current as 10 µA is",
    options: ["100", "10", "0.1", "1000"],
    correct: 0
  },
  {
    id: 54,
    question: "If an emitter current is changed by 4mA, the collector current changes by 3.5mA. The value of β will be:",
    options: ["8", "0.5", "3.5", "7"],
    correct: 3
  },
  {
    id: 55,
    question: "A MOSFET is a",
    options: ["Current controlled device", "Voltage controlled device", "Resistance controlled device", "Junction controlled device"],
    correct: 1
  },
  {
    id: 56,
    question: "A MOSFET has................................... terminals.",
    options: ["Two", "Five", "Three", "Four"],
    correct: 2
  },
  {
    id: 57,
    question: "If the value of α is 0.9, then value of β is ...........",
    options: ["9", "0.9", "900", "90"],
    correct: 0
  },
  {
    id: 58,
    question: "The value of β for a silicon transistor given the collector current as 1 mA and base current as 25 µA is",
    options: ["40", "4", "400", "4000"],
    correct: 0
  },
  {
    id: 59,
    question: "The value of α for a silicon transistor, given the collector current as 1 mA and base current as 25 µA is",
    options: ["0.9176", "0.9756", "0.9276", "0.9376"],
    correct: 1
  },
  {
    id: 60,
    question: "In CE-RC coupled amplifier, an emitter bypass capacitor is connected in parallel with emitter resistance RE to",
    options: ["Increase the noise in the circuit", "To provide a low reactance path to the amplified ac signal", "To support the resistance RE", "To block the dc voltage"],
    correct: 1
  },
  {
    id: 61,
    question: "The number of depletion layers in a transistor is ............",
    options: ["Four", "Three", "One", "Two"],
    correct: 3
  },
  {
    id: 62,
    question: "In a transistor, signal is transferred from a ............... region",
    options: ["high resistance to low resistance", "low resistance to high resistance", "high resistance to high resistance", "low resistance to low resistance"],
    correct: 1
  },
  {
    id: 63,
    question: "With the E-MOSFET, when gate input voltage is zero, drain current is .....",
    options: ["At saturation", "Zero", "IDSS", "Widening the channel"],
    correct: 1
  },
  {
    id: 64,
    question: "MOSFET has a thin layer of silicon dioxide, which act as:",
    options: ["Resistance", "Inductor", "Semiconductor", "Capacitor"],
    correct: 3
  },
  {
    id: 65,
    question: "The base of a transistor is .............. doped",
    options: ["Heavily", "Moderately", "Lightly", "Not"],
    correct: 2
  },
  {
    id: 66,
    question: "The emitter of a transistor is ..................... doped",
    options: ["Heavily", "Moderately", "Lightly", "Not"],
    correct: 0
  },

  // UNIT 3 - Op-Amp
  {
    id: 67,
    question: "Which of the following electrical characteristics is not exhibited by an ideal op-amp?",
    options: ["Infinite output resistance", "Infinite bandwidth", "Infinite voltage gain", "Infinite slew rate"],
    correct: 0
  },
  {
    id: 68,
    question: "An integrator circuit using an Op Amp has ...................in its feedback path",
    options: ["Resistor", "inductor", "Capacitor", "Diode"],
    correct: 2
  },
  {
    id: 69,
    question: "Find the output voltage of an ideal op-amp if V1 and V2 are the two input voltages",
    options: ["V0 = V1 - V2", "V0 = A(V1 - V2)", "V0 = A(V1 + V2)", "V0 = V1 × V2"],
    correct: 1
  },
  {
    id: 70,
    question: "A differentiator circuit using an Op Amp has ...................in its feedback path",
    options: ["Capacitor", "Resistor", "Diode", "Inductor"],
    correct: 1
  },
  {
    id: 71,
    question: "A sine wave of 0.5 V peak voltage is applied as an input to an inverting amplifier with R1 = 10 kΩ and Rf = 50 kΩ The output voltage Vo is",
    options: ["5.2 V peak", "-10 V peak", "-2.5 V peak-peak", "-2.5 V peak"],
    correct: 3
  },
  {
    id: 72,
    question: "The output voltage obtained for an ideal op-amp is by",
    options: ["Amplifying individual input voltages", "Amplifying products of two input voltage", "Amplifying the difference between the two input voltages", "None of the mentioned"],
    correct: 2
  },
  {
    id: 73,
    question: "The output voltage V0 of an Op Amp integrator is given by",
    options: ["V0 = -(1/R1Cf)∫Vindt", "V0 = -(1/Cf)∫Vindt", "V0 = -(1/R1Cf)∫Vindt", "V0 = -(1/RfC1)∫Vindt"],
    correct: 0
  },
  {
    id: 74,
    question: "A sine wave of 0.5 V peak voltage is applied as an input to a non- inverting amplifier with R1 = 10 kΩ and Rf = 50 kΩ The output voltage Vo is",
    options: ["3 V peak", "2.5 V peak", "-3 V peak", "3 V peak-peak"],
    correct: 0
  },
  {
    id: 75,
    question: "Which is not the ideal characteristic of an op-amp?",
    options: ["Output impedance is zero", "Input Resistance is zero", "Bandwidth is infinity", "Open loop voltage gain is infinity"],
    correct: 1
  },
  {
    id: 76,
    question: "The output voltage V0 of an Op Amp differentiator is given by",
    options: ["V0 = -RfC1(dVin/dt)", "V0 = -(1/Cf)∫Vindt", "V0 = -(1/Rf)∫Vindt", "V0 = -(1/RfC1)(dVin/dt)"],
    correct: 0
  },
  {
    id: 77,
    question: "A sine wave of 3.5 V peak voltage is applied as an input to a non- inverting amplifier with R1 = 20 kΩ and Rf = 80 kΩ The output voltage Vo is",
    options: ["-12.5 V peak", "10 V peak", "17.5 V peak", "-5 V peak"],
    correct: 2
  },
  {
    id: 78,
    question: "Which factor determines the output voltage of an op-amp?",
    options: ["Supply voltage", "Both positive and negative saturation voltage", "Negative saturation voltage", "Positive saturation voltage"],
    correct: 1
  },
  {
    id: 79,
    question: "The output voltage swing of a comparator for an applied input voltage depends on",
    options: ["Regulated power supply voltages", "Dual power supply voltages", "AC signals applied at the terminals of the Op Amp", "DC signals applied at the terminals of the Op Amp"],
    correct: 1
  },
  {
    id: 80,
    question: "A sine wave of 2 V peak voltage is applied as an input to an inverting amplifier with R1 = 24 kΩ and Rf = 82 kΩ The output voltage Vo is",
    options: ["-8.833 V peak", "-8.833 V peak-peak", "-6.833 V peak-peak", "-6.833 V peak"],
    correct: 3
  },
  {
    id: 81,
    question: "An inverting amplifier using an Op Amp with R1 and Rf as the resistors provide an output voltage equal to one of them as",
    options: ["V0 = -(1 + Rf/R1)Vin", "V0 = (1 + Rf/R1)Vin", "V0 = -(Rf/R1)Vin", "V0 = (Rf/R1)Vin"],
    correct: 2
  },
  {
    id: 82,
    question: "A sine wave of 0.5 V peak voltage is applied as an input to a non- inverting amplifier with R1 = 6 kΩ and Rf = 24 kΩ The output voltage Vo is",
    options: ["2.5 V peak", "-2.5 V peak", "10 V peak", "2.5 V peak-peak"],
    correct: 0
  },
  {
    id: 83,
    question: "An ideal OP-AMP has following characteristics",
    options: ["Ri = infinity, A = infinity, Ro = 0", "Ri = 0, A=infinity, Ro = 0", "Ri= infinity, A = 0, Ro = infinity", "Ri= 0, A = infinity, Ro = infinity"],
    correct: 0
  },
  {
    id: 84,
    question: "A non-inverting amplifier using Op Amp with R1 and Rf as the resistors provides an output voltage equal to",
    options: ["V0 = -(Rf/R1)Vin", "V0 = -(1 + Rf/R1)Vin", "V0 = (Rf/R1)Vin", "V0 = (1 + Rf/R1)Vin"],
    correct: 3
  },
  {
    id: 85,
    question: "A non-inverting Op-Amp has a gain of 91 with R1 = 1 kΩ. The resistor in the feedback path must have a value of",
    options: ["91 kΩ", "90 kΩ", "99 kΩ", "92 kΩ"],
    correct: 1
  },
  {
    id: 86,
    question: "For an Op-Amp having differential gain Ad and Common mode gain Ac, CMRR is",
    options: ["Ad + Ac", "1+ (Ad/Ac)", "Ad/Ac", "Ac/Ad"],
    correct: 2
  },
  {
    id: 87,
    question: "A non-inverting Op-Amp has a gain of 61 with R1 = 2 kΩ. The resistor in the feedback path must have a value of",
    options: ["61 kΩ", "62 kΩ", "121 kΩ", "120 kΩ"],
    correct: 3
  },
  {
    id: 88,
    question: "Op Amp Comparator is a circuit whose output voltage switches between",
    options: ["+Vin, -Vin", "+Vo, -Vo", "+Vsat, -Vsat", "None"],
    correct: 2
  },
  {
    id: 89,
    question: "An inverting Op-Amp has a gain of -61 with R1 = 1 kΩ. The resistor in the feedback path must have a value of",
    options: ["61 kΩ", "60 kΩ", "59 kΩ", "62 kΩ"],
    correct: 0
  },
  {
    id: 90,
    question: "With reference to the output voltage of an inverting Op Amp summer V0 = -(Rf/R1*V1 + Rf/R2*V2 + Rf/R3*V3), if Rf = R1 = R2 = R3 = R, then",
    options: ["V0 = -(V1 + V2 + V3)", "V0 = -V1 + V2 + V3", "V0 = V1 + V2 + V3", "None of these"],
    correct: 0
  },

  // UNIT 4 - Oscillators and Feedback
  {
    id: 91,
    question: "In Colpitts' oscillator, the components used in the feedback network are",
    options: ["2R and 2C", "2L and 1C", "2C and 1L", "2L and 2C"],
    correct: 2
  },
  {
    id: 92,
    question: "With a resistance value of R=1kΩ in a feedback network of RC oscillator, frequency of oscillations generated is 5 kHz. The value of the capacitor C is",
    options: ["0.0129 μF", "0.129 μF", "0.0219 μF", "129 μF"],
    correct: 0
  },
  {
    id: 93,
    question: "Gain with negative feedback is given by Af=A/(1+Aβ). The feedback factor is",
    options: ["A", "β", "Af", "Aβ"],
    correct: 1
  },
  {
    id: 94,
    question: "An amplifier has an open loop voltage gain of 1000. If 10% negative voltage series feedback is used, then the closed loop gain is",
    options: ["9.9", "99.9", "0.9", "990"],
    correct: 0
  },
  {
    id: 95,
    question: "For an amplifier with negative feedback, the closed loop gain is given by",
    options: ["Af = A/(1 - Aβ)", "Af = A/(1 + Aβ)", "Af = A/(1 - β)", "Af = A/(1 - Vβ)"],
    correct: 1
  },
  {
    id: 96,
    question: "In a practical oscillator circuit, to start oscillations, the loop gain Aβ must be",
    options: ["Not Equal to 1", "Equal to 1", "Less than 1", "Greater than 1"],
    correct: 0
  },
  {
    id: 97,
    question: "An amplifier has an open loop voltage gain of 2000. If 40% negative voltage series feedback is used, then the closed loop gain is",
    options: ["249", "24.9", "0.249", "2.49"],
    correct: 3
  },
  {
    id: 98,
    question: "In an amplifier, positive feedback leads to",
    options: ["Noise", "Amplification", "Breakdown", "Oscillations"],
    correct: 3
  },
  {
    id: 99,
    question: "For an amplifier with positive feedback, the closed loop gain is given by",
    options: ["Af = A/(1 - β)", "Af = A/(1 + Aβ)", "Af = A/(1 - Aβ)", "Af = A/(1 - Vβ)"],
    correct: 2
  },
  {
    id: 100,
    question: "What is an oscillator?",
    options: ["A rectifier", "A generator", "An amplifier with positive feedback", "An amplifier with negative feedback"],
    correct: 2
  },
  {
    id: 101,
    question: "An amplifier has an open loop voltage gain of 100,000. If the negative voltage series feedback factor is 0.01, then the closed loop gain is",
    options: ["9.9", "99.9", "0.9", "990"],
    correct: 1
  },
  {
    id: 102,
    question: "In an amplifier with positive feedback, open loop gain A is 20 with feedback factor β as 0.04. Then the gain of the amplifier with feedback is",
    options: ["200", "50", "100", "infinity"],
    correct: 2
  },
  {
    id: 103,
    question: "The feedback factor of Colpitt's oscillator is given by",
    options: ["β = Af/A", "β = C1/C2", "β = A/Af", "β = C2/C1"],
    correct: 3
  },
  {
    id: 104,
    question: "Which of the following is not an advantage of a negative feedback amplifier?",
    options: ["Higher input impedance", "Unstable gain", "Reduction in noise", "Lower output impedance"],
    correct: 1
  },
  {
    id: 105,
    question: "An amplifier has an open loop voltage gain of 10,000. If the negative voltage series feedback factor is 0.01, then the closed loop gain is",
    options: ["990", "9.9", "0.99", "99"],
    correct: 3
  },
  {
    id: 106,
    question: "The feedback factor of Hartley oscillator is given by",
    options: ["β = A/Af", "β = L2/L1", "β = L1/L2", "β = Af/A"],
    correct: 2
  },
  {
    id: 107,
    question: "Which among the following parameters acts as an initiator for the operation of an oscillator in the absence of input signal?",
    options: ["Noise voltage", "Noise power", "Noise current", "Noise temperature"],
    correct: 0
  },
  {
    id: 108,
    question: "In which type of oscillator circuit capacitor split representation can be seen in tank circuit?",
    options: ["Wein bridge", "RC phase shift", "Hartley", "Colpitts"],
    correct: 3
  },
  {
    id: 109,
    question: "In an RC phase shift oscillator, the resistances in the feedback network are 4.7 kΩ and capacitor values are C = 0.47µF. The frequency of oscillations is",
    options: ["0.29413 Hz", "294.13 Hz", "2941.3 Hz", "29.413 Hz"],
    correct: 3
  },
  {
    id: 110,
    question: "The tank circuit of a Colpitt's oscillator has L= 5 mH with C1 = 22.22 nF and C2 = 2.22 nF. The feedback factor β is",
    options: ["0.001", "0.1", "0.01", "1"],
    correct: 1
  },
  {
    id: 111,
    question: "An RC network in an RC phase shift oscillator has C = 0.1 µF. The frequency of oscillations is 1 kHz. The value of R used in the feedback network is",
    options: ["650 Ω", "500 Ω", "600 Ω", "1 KΩ"],
    correct: 0
  },
  {
    id: 112,
    question: "RC phase shift oscillator is a",
    options: ["Low frequency oscillator", "High frequency oscillator", "Stable frequency oscillator", "Relaxation oscillator"],
    correct: 0
  },
  {
    id: 113,
    question: "In a Hartley oscillator, if L1 = 5 mH, L2 = 10 mH and C = 0.01µF, the value of the feedback factor β is",
    options: ["50", "0.05", "0.5", "500"],
    correct: 2
  },
  {
    id: 114,
    question: "The frequency of oscillations generated by RC phase shift oscillator is",
    options: ["1/(2πRC)", "1/(2π√6RC)", "1/(2π√6RC)", "1/(2π6RC)"],
    correct: 1
  },
  {
    id: 115,
    question: "An RC network in an RC phase shift oscillator has C = 0.2 µF. The frequency of oscillations is 1 kHz. The value of R used in the feedback network is",
    options: ["325 Ω", "500 Ω", "600 Ω", "1KΩ"],
    correct: 0
  },
  {
    id: 116,
    question: "Hartley oscillator is a",
    options: ["Relaxation oscillator", "Low frequency oscillator", "Stable frequency oscillator", "High frequency oscillator"],
    correct: 3
  },
  {
    id: 117,
    question: "In a Hartley oscillator, if L1 = 7 mH, L2 = 10 mH and C = 0.01µF, the value of the feedback factor β is",
    options: ["0.7", "0.07", "70", "700"],
    correct: 0
  },
  {
    id: 118,
    question: "The frequency of oscillations generated by Colpitts oscillator is",
    options: ["1/(2πLC)", "1/(2π√LeqC)", "1/(2π√L)", "1/(2π√LCeq)"],
    correct: 3
  },
  {
    id: 119,
    question: "The components in the feedback network of Hartley and Colpitt's oscillators are",
    options: ["L & C components", "R & C components", "Only L Component", "None of these"],
    correct: 0
  },
  {
    id: 120,
    question: "What is an angle of phase shift for each designed RC network in the Phase Shift Oscillator circuit?",
    options: ["30°", "45°", "60°", "90°"],
    correct: 2
  },
  {
    id: 121,
    question: "In a Hartley oscillator, if L1 = 2 mH, L2 = 8 mH and C = 0.01µF, the value of the feedback factor β is",
    options: ["25", "0.025", "250", "0.25"],
    correct: 3
  },
  {
    id: 122,
    question: "The frequency of oscillations generated by Hartley oscillator is",
    options: ["1/(2π√C)", "1/(2π√LCeq)", "1/(2π√LeqC)", "1/(2πLC)"],
    correct: 2
  },
  {
    id: 123,
    question: "In an RC-Phase shift oscillator, the components used in the feedback network are",
    options: ["4R and 4C", "1R and 1C", "3R and 3C", "2R and 2L"],
    correct: 2
  },
  {
    id: 124,
    question: "In a Colpitts oscillator, if C1 = 100 pF, C2 = 60 pF and L = 0.422 H, the value of the feedback factor β is",
    options: ["0.6", "0.06", "60", "600"],
    correct: 0
  },
  {
    id: 125,
    question: "The criterion that determines the mathematical condition to generate sustained oscillations is",
    options: ["Pinch off", "Shockley", "Barkhausen", "Threshold"],
    correct: 2
  },

  // UNIT 5 - Communication Systems and Embedded Systems
  {
    id: 126,
    question: "Fiber optic cable is a ----------- type of channel.",
    options: ["Wireless channel", "Free space channel", "Wired channel", "Radio channel"],
    correct: 2
  },
  {
    id: 127,
    question: "The mechanism of using the same frequency band within a geographical area in a Cellular or mobile communication system is referred to as",
    options: ["Frequency reuse", "Efficiency", "Reliability", "Bandwidth coordinator"],
    correct: 0
  },
  {
    id: 128,
    question: "Which of the following is true about microprocessors?",
    options: ["It has interfacing circuits", "It has an internal memory", "It contains ALU, CU, and registers", "It uses Harvard architecture"],
    correct: 2
  },
  {
    id: 129,
    question: "Best example for natural noise is",
    options: ["Rain", "Traffic noise", "Industrial noise", "Sound pollution"],
    correct: 0
  },
  {
    id: 130,
    question: "The radio channel used for transmission of information from a base station to a mobile station is called,",
    options: ["Reverse channel", "Control channel", "Mobile channel", "Forward channel"],
    correct: 3
  },
  {
    id: 131,
    question: "Which one of the following offers external chips for memory and peripheral interface circuits?",
    options: ["Microcontroller", "Embedded system", "Peripheral System", "Microprocessor"],
    correct: 3
  },
  {
    id: 132,
    question: "Best example for man-made noise is",
    options: ["Rain", "Radiations from the sun, stars", "Traffic noise", "Reflections from Earth"],
    correct: 2
  },
  {
    id: 133,
    question: "In a cellular radio system, the __________________ connects the cellular base stations and mobile stations to the Public Switched Telephone Networks.",
    options: ["Base station(BS)", "Mobile Switching Center (MSO)", "Forward Control Channel (FCC)", "Time Division Multiple Access (TDMA)"],
    correct: 1
  },
  {
    id: 134,
    question: "The audio frequency range is",
    options: ["30 to 34 kH", "300 Hz to 3.4 kHz", "20 Hz to 20 kHz", "10 to 10 kHz"],
    correct: 2
  },
  {
    id: 135,
    question: "The speech signal frequency range is",
    options: ["20 Hz to 20 kHz", "30 to 34 kHz", "10 to 10 kHz", "300 Hz to 3.4 kHz"],
    correct: 3
  },
  {
    id: 136,
    question: "Which of the following is true about an Embedded System?",
    options: ["An embedded system usually performs a specialized operation and does the same repeatedly", "It must have a memory, as its software usually embeds in ROM", "It must have connected peripherals to connect input and output devices.", "All of them"],
    correct: 3
  },
  {
    id: 137,
    question: "The following frequency band is utilized in cellular or mobile communication system,",
    options: ["Audible frequency", "Audio frequency", "Unlicensed frequency", "Radio frequency"],
    correct: 3
  },
  {
    id: 138,
    question: "The loss in the transmission is minimum for the following type of wire",
    options: ["Flat cable", "Copper wire", "Fiber optic cable", "Coaxial cable"],
    correct: 2
  },
  {
    id: 139,
    question: "On which component is modulation performed?",
    options: ["Transmitter", "Signal", "Jammer", "None of the above"],
    correct: 0
  },
  {
    id: 140,
    question: "What is modulated signal?",
    options: ["It is the product of modulating signal and carrier signal", "It is the product of modulating signal and information signal", "It is an input signal", "None of the above"],
    correct: 0
  },
  {
    id: 141,
    question: "What is the primary difference between a microcontroller and a microprocessor?",
    options: ["Microcontrollers have higher clock speeds than microprocessors.", "Microcontrollers have built-in memory and peripherals.", "Microprocessors have built-in ADCs and DACs", "Microprocessors are smaller in size"],
    correct: 1
  },
  {
    id: 142,
    question: "Which channel type is used for initiating mobile calls from the mobile device to base station?",
    options: ["Forward Control Channel (FCC)", "Forward Voice Channel (FVC)", "Reverse Control Channel (RCC)", "Reverse Voice Channel (RVC)"],
    correct: 2
  },
  {
    id: 143,
    question: "The soft handover of an active call to a new frequency band when a mobile user crosses a cell boundary.",
    options: ["Hand off", "Channel efficiency", "Frequency reuse", "Frequency Division Duplexing"],
    correct: 0
  },
  {
    id: 144,
    question: "What is the primary reason mobile communication is referred to as 'Cellular communication'?",
    options: ["It uses cells to store energy for mobile devices", "The communication signals are powered by biological cells", "It involves mobile devices and a base station within a small geographical area called a cell.", "It is designed to mimic the structure of biological cells."],
    correct: 2
  },
  {
    id: 145,
    question: "In a cellular system, a 'cluster' is defined as:",
    options: ["A single base station serving multiple mobile users.", "A group of cells that collectively use the complete set of available frequencies.", "The central Mobile Switching Centre (MSC) and all its connected base stations.", "The transmission media connecting the transmitter and receiver."],
    correct: 1
  },
  {
    id: 146,
    question: "What is the primary purpose of ROM in an embedded system?",
    options: ["To store the code or program that the user cannot change", "To store temporary data for processing", "To allow users to change the firmware frequently", "To interface with external communication modules"],
    correct: 0
  },
  {
    id: 147,
    question: "What is the function of a Sensor in an embedded system?",
    options: ["To convert signals into physical action", "To display information to the user", "To process data without interacting with the real world", "To convert energy from one form to another for measurement or control, acting as an input device"],
    correct: 3
  },
  {
    id: 148,
    question: "Which of the following is an example of an Actuator?",
    options: ["Electric motor", "Humidity sensor", "PIR (passive infrared) sensor", "Keypad"],
    correct: 0
  },
  {
    id: 149,
    question: "The I/O subsystem of an embedded system facilitates interaction with the external world primarily through:",
    options: ["Only memory modules", "Only the core processor", "Communication interfaces like Wi-Fi or Bluetooth.", "Sensors and actuators connected to the input and output ports"],
    correct: 3
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
            let results = JSON.parse(localStorage.getItem('BEQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('BEQuizResults', JSON.stringify(results));
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
            const results = JSON.parse(localStorage.getItem('BEQuizResults') || '[]');
            
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
            const results = JSON.parse(localStorage.getItem('BEQuizResults') || '[]');
            
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
            a.download = `BE_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
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
    new BEQuizApp();
});