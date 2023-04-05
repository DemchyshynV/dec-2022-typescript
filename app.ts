// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
interface ICore {
    flight: number
    core: {
        reuse_count: number
        status: string
    }
}

interface IPayload {
    payload_type: string
    payload_mass_kg: number
    payload_mass_lbs: number
}

interface IMission {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: string
        video_link: string
    },
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICore[]
        },
        second_stage: {
            payloads: IPayload[]
        }
    }
}


const myMisson: IMission = {
    mission_name: 'skjdfhksjdhf',
    links: {
        article_link: 'sdfsdf',
        video_link: 'sdfsfd'
    },
    rocket: {
        rocket_name: 'sdfsdf',
        first_stage: {
            cores: [
                {
                    core: {reuse_count: 1, status: 'dddd'},
                    flight: 2
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: 'ssss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                },
                {
                    payload_type: 'ssss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                },
                {
                    payload_type: 'ssss',
                    payload_mass_kg: 111,
                    payload_mass_lbs: 333
                }
            ]
        }

    }
}
myMisson.rocket.first_stage.cores.push({fl})
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:
interface IUser {
    name: string
    age: number
    gender: string
}

const user = {
    name: "Max",
    age: 18,
    gender: 'male',
    sfsdf:'sss'
}


function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): any {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)


interface IShapeActions {
    area: () => number;
    perimeter: () => number;
}

class Rectangle implements IShapeActions {
    constructor(private a: number, private b: number) {
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return this.a + this.b;
    }
}

class Triangle implements IShapeActions {
    constructor(private a: number, private b: number, private c: number, private h: number) {
    }

    area(): number {
        return (this.a * this.h) / 2;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }
}

const shapes: IShapeActions[] = [new Rectangle(2, 2), new Triangle(4, 3, 4, 5)];
for (let shape of shapes) {
    console.log(shape.perimeter());
    console.log(shape.area());
}
