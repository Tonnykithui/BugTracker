export enum Role {
    PROJECTMANAGER = 'PROJECTMANAGER',
    TESTER = 'TESTER',
    DEVELOPER = 'DEVELOPER'
}

export type LoginDTO = {
    email: string,
    password: string
}