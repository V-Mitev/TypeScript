type Diagnosable = {
    partName: string;
    runDiagnostics(): string;
};

type CarBody = { material: string; state: string };
type Tires = { airPressure: number; condition: string };
type Engine = { horsepower: number; oilDensity: number };

function runDiagnostics(this: Diagnosable): string {
    return this.partName;
}

function runCarDiagnostics(
    carBody: CarBody & Diagnosable,
    tires: Tires & Diagnosable,
    engine: Engine & Diagnosable
) {
    console.log(carBody.runDiagnostics());
    console.log(tires.runDiagnostics());
    console.log(engine.runDiagnostics());
}

runCarDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }
);