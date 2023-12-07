class Teacher {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _fullTimeEmployee: boolean;
  private readonly _yearsOfExperience?: number;
  private readonly _location: string;
  private readonly _additionalAttributes: { [key: string]: any };

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    additionalAttributes?: { [key: string]: any }
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._yearsOfExperience = yearsOfExperience;
    this._location = location;
    this._additionalAttributes = additionalAttributes || {};
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  get location(): string {
    return this._location;
  }

  get additionalAttributes(): { [key: string]: any } {
    return this._additionalAttributes;
  }
}

// an interface named Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

class DirectorTeacher implements Directors {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _fullTimeEmployee: boolean;
  private readonly _yearsOfExperience?: number;
  private readonly _location: string;
  private readonly _additionalAttributes: { [key: string]: any };
  private readonly _numberOfReports: number;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    numberOfReports: number,
    additionalAttributes?: { [key: string]: any }
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._yearsOfExperience = yearsOfExperience;
    this._location = location;
    this._additionalAttributes = additionalAttributes || {};
    this._numberOfReports = numberOfReports;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  get location(): string {
    return this._location;
  }

  get additionalAttributes(): { [key: string]: any } {
    return this._additionalAttributes;
  }

  get numberOfReports(): number {
    return this._numberOfReports;
  }
}

//function printTeacher
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};
