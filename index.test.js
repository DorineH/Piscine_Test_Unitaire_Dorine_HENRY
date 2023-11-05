const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});
// ----------------------- SAISON 1 -----------------------
// Test unitaire pour l'addition
describe('POST /s1/exercice1', () => {
    test('Test exo 1 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n1: null,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 1 S1 : n1 et n2 sont undefined', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 1 S1 : n1 égale à null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n1: null,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 1 S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n1: 2,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 1 S1 : n1 est undefined', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 1 S1 : n2 est undefined', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n1: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 1 S1 : calcule correctement la sommes', (done) => {
        request(app)
            .post('/s1/exercice1')
            .send({
                n1: 2,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 4 }]);
                done();
            });
    });
});

// Test unitaire pour la soustraction
describe('POST /s1/exercice2', () => {
    test('Test exo 2 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({
                n1: null,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 2 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 2 S1 : n1 égale à null', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({
                n1: null,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 2 S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({
                n1: 2,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 2 S1 : soustraction', (done) => {
        request(app)
            .post('/s1/exercice2')
            .send({
                n1: 4,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 2 }]);
                done();
            });
    });
});

// Test unitaire pour la multiplication
describe('POST /s1/exercice3', () => {
    test('Test exo 3 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n1: null,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });   
    test('Test exo 3 S1 : n1 et n2 sont undefined', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 3 S1 : n1 égale à null', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n1: null,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 3 S1 : n1 est undefined', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 3 S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n1: 2,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 3 S1 : n2 est undefined', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n1: 2,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 3 S1 : multiplication', (done) => {
        request(app)
            .post('/s1/exercice3')
            .send({
                n1: 4,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 8 }]);
                done();
            });
    });
});


// Test unitaire pour la division
describe('POST /s1/exercice4', () => {
    test('Test exo 4 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n1: null,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 4 S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 4 S1 : n1 égale à null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n1: null,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 4 S1 : n1 égale à null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 4 S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n1: 2,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 4 S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n1: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 4 S1 : division', (done) => {
        request(app)
            .post('/s1/exercice4')
            .send({
                n1: 4,
                n2: 2
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 2 }]);
                done();
            });
    });
});

// Test unitaire pour le factorielle
describe('POST /s1/exercice5', () => {
    test('Test exo 5 S1 : n1 est null', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({
                n1: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error : true, reponse: "Le nombre n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 5 S1 : n1 est null', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error : true, reponse: "Le nombre n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 5 S1 : factorielle négatif', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({
                n1: -5
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error : true,
                    reponse: "Le nombre n'est pas valide"
                }]);
                done();
            });
    });
    test('Test exo 5 S1 : factorielle', (done) => {
        request(app)
            .post('/s1/exercice5')
            .send({
                n1: 5
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 120 }]);
                done();
            });
    });
});

// Test unitaire pour connaître si un nombre est pair ou impaire
describe('POST /s1/exercice6', () => {
    test('Test exo 6 S1 : null', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({
                n1: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true, 
                    reponse: "Le nombre n'est pas valide"
                }]);
                done();
            });
    });
    test('Test exo 6 S1 : null', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true, 
                    reponse: "Le nombre n'est pas valide"
                }]);
                done();
            });
    });
    test('Test exo 6 S1 : pair', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({
                n1: 4,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "pair" }]);
                done();
            });
    });
    test('Test exo 6 S1 : pair nombre négatif', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({
                n1: -24,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "pair" }]);
                done();
            });
    });
    test('Test exo 6 S1 : impair', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({
                n1: 11
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "impair"}]);
                done();
            });
    });
    test('Test exo 6 S1 : impair nombre négatif', (done) => {
        request(app)
            .post('/s1/exercice6')
            .send({
                n1: -11
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "impair"}]);
                done();
            });
    });
});

// Test unitaire pour la conversion celsius et fahrenheit
describe('POST /s1/exercice7', () => {
    test('Test exo 7 S1 : celsius null', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({
                celsius: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true, 
                    reponse: "Le nombre n'est pas valide"}]);
                done();
            });
    });
    test('Test exo 7 S1 : celsius undefined', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true, 
                    reponse: "Le nombre n'est pas valide"}]);
                done();
            });
    });
    test('Test exo 7 S1 : celsius négatif', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({
                celsius: -10,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 14 }]);
                done();
            });
    });
    test('Test exo 7 S1 : celsius positif', (done) => {
        request(app)
            .post('/s1/exercice7')
            .send({
                celsius: 25,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 77 }]);
                done();
            });
    });
});

// Test unitaire pour le calcule de l'aire d'un cercle
describe('POST /s1/exercice8', () => {
    test('Test exo 8 S1 : rayon null', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({
                rayon: null,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true,
                    reponse: "Le nombre n'est pas valide"
                 }]);
                done();
            });
    });
    test('Test exo 8 S1 : rayon undefined', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true,
                    reponse: "Le nombre n'est pas valide"
                 }]);
                done();
            });
    });
    test('Test exo 8 S1 : rayon négatif', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({
                rayon: -5,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 78.53981633974483 }]);
                done();
            });
    });
    test('Test exo 8 S1 : rayon positif', (done) => {
        request(app)
            .post('/s1/exercice8')
            .send({
                rayon: 5,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 78.53981633974483 }]);
                done();
            });
    });
});

// Test unitaire pour la fonction palindrome
describe('POST /s1/exercice9', () => {
    test('Test exo 9 S1 : le mot est null', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({
                mot: null,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{   
                    error: true,
                    reponse: "Le mot n'est pas valide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S1 : le mot est undefined', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{   
                    error: true,
                    reponse: "Le mot n'est pas valide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S1 : le mot n\'est pas un palindrome', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({
                mot: "Bonjour"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: false }]);
                done();
            });
    });
    test('Test exo 9 S1 : le mot est un palindrome', (done) => {
        request(app)
            .post('/s1/exercice9')
            .send({
                mot: "solos"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: true }]);
                done();
            });
    });
});

// Test unitaire pour la fonction qui calcule le pgcd
describe('POST /s1/exercice10', () => {
    test('Test exo 10 pgcd S1 : n1 et n2 sont null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: null,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : n1 et n2 sont undefined', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Ils manquent des nombres" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : n1 est null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: null,
                n2: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : n1 est undefined', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n2: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Le nombre 1 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : n2 est null', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: 5,
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : n2 est undefined', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: 5
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Le nombre 2 n'est pas valide" }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : pgcd nombre négatif', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: -22,
                n2: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: -2 }]);
                done();
            });
    });
    test('Test exo 10 pgcd S1 : pgcd', (done) => {
        request(app)
            .post('/s1/exercice10')
            .send({
                n1: 2,
                n2: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 2 }]);
                done();
            });
    });
});

// ----------------------- SAISON 2 -----------------------
// Test unitaire de la fonction pour obtenir la date d'aujourd'hui il y a 10 ans
describe('POST /s2/exercice1', () => {
    test('Test exo 1 S2 : prend la date du jour moins 10', (done) => {
        request(app)
            .post('/s2/exercice1')
            .send({
                n1: "2023-11-05"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "2013-11-05" }]);
                done();
            });
    });
    test('Test exo 1 S2 : date null', (done) => {
        request(app)
            .post('/s2/exercice1')
            .send({
                n1: null,
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: true, reponse: "La date n'est pas correct" }]);
                done();
            });
    });
    test('Test exo 1 S2 : date undefined', (done) => {
        request(app)
            .post('/s2/exercice1')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: true, reponse: "La date n'est pas correct" }]);
                done();
            });
    });
});

// Test unitaire de la fonction qui formate une date en "jj/mm/aaaa"
describe('POST /s2/exercice2', () => {
    test('Test exo 2 S2 : date null', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({
                date: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: true, reponse: "La date est indefinie" }]);
                done();
            });
    });
    test('Test exo 2 S2 : date undefined', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: true, reponse: "La date est indefinie" }]);
                done();
            });
    });
    test('Test exo 2 S2 : date pas au bon format', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({
                date: "13-11-2023"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: true, reponse: "La date n'est pas correct" }]);
                done();
            });
    });
    test('Test exo 2 S2 : formatage correct', (done) => {
        request(app)
            .post('/s2/exercice2')
            .send({
                date: "2023-12-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "13/12/2023" }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour calculer la différence en jours entre deux dates
describe('POST /s2/exercice3', () => {
    test('Test exo 3 S2 : n1 est null', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({
                n1: null,
                n2: "2023-11-23"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "La date n1 est indefinie" 
                }]);
                done();
            });
    });
    test('Test exo 3 S2 : n1 est undefined', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({
                n2: "2023-11-23"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "La date n1 est indefinie" 
                }]);
                done();
            });
    });
    test('Test exo 3 S2 : n2 est null', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({
                n1: "2023-11-13",
                n2: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "La date n2 est indefinie" 
                }]);
                done();
            });
    });
    test('Test exo 3 S2 : n2 est undefined', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({
                n1: "2023-11-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "La date n2 est indefinie" 
                }]);
                done();
            });
    });
    test('Test exo 3 S2 : n1 et n2 sont undefined', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "Ils manquent des dates" 
                }]);
                done();
            });
    });
    test('Test exo 3 S2 : compare deux date', (done) => {
        request(app)
            .post('/s2/exercice3')
            .send({
                n1: "2023-11-03",
                n2: "2023-11-23"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: 20 }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour ajouter un nombre de jours à une date
describe('POST /s2/exercice4', () => {
    test('Test exo 4 S2 : ajoute des jours à la date', (done) => {
        request(app)
            .post('/s2/exercice4')
            .send({
                date: "2023-11-13",
                jours: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "2023-11-23" }]);
                done();
            });
    });
    test('Test exo 4 S2 : pas de jours à ajouter', (done) => {
        request(app)
            .post('/s2/exercice4')
            .send({
                date: "2023-11-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true,
                    reponse: "Il manque des jours" 
                }]);
                done();
            });
    });
    test('Test exo 4 S2 : pas de date à incrementer', (done) => {
        request(app)
            .post('/s2/exercice4')
            .send({
                jours: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true,
                    reponse: "Il manque une date"
                 }]);
                done();
            });
    });
    test('Test exo 4 S2 : date pas en bon format', (done) => {
        request(app)
            .post('/s2/exercice4')
            .send({
                date: "2023-34-31",
                jours: 10
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true,
                    reponse: "La date n'existe pas"
                 }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour vérifier si une année est bissextile
describe('POST /s2/exercice5', () => {
    test('Test exo 5 S2 : annee est indefinie', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Données non valide" 
                }]);
                done();
            });
    });
    test('Test exo 5 S2 : l\'année est null', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ annee: null })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Données non valide" 
                }]);
                done();
            });
    });
    test('Test exo 5 S2 : annee negative', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ 
                annee: -2023
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "L'année doit être positive"
                }]);
                done();
            });
    });
    test('Test exo 5 S2 : l\'année n\'est pas une année bissextile', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ 
                annee: 2023
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "L'année n'est pas bissextile" }]);
                done();
            });
    });
    test('Test exo 5 S2 : l\'année est une année bissextile', (done) => {
        request(app)
            .post('/s2/exercice5')
            .send({ 
                annee: 2024
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ reponse: "L'année est bissextile" }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour obtenir le premier jour du mois d'une date donnée
describe('POST /s2/exercice6', () => {
    test('Test exo 6 S2 : date undefined', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date invalide" 
                }]);
                done();
            });
    });
    test('Test exo 6 S2 : date null', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({ 
                date: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 6 S2 : format date invalide', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({ 
                date: "13-11-2023"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 6 S2 : format date inconnue', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({ 
                date: "2023-13-34"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 6 S2 : obtention du 1er mois de la date', (done) => {
        request(app)
            .post('/s2/exercice6')
            .send({ 
                date: "2023-11-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    reponse: "2023-11-01"
                }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour obtenir le dernier jour du mois d'une date donnée 
describe('POST /s2/exercice7', () => {
    test('Test exo 7 S2 : date undefined', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date invalide" 
                }]);
                done();
            });
    });
    test('Test exo 7 S2 : date null', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ 
                date: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 7 S2 : format date invalide', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ 
                date: "13-11-2023"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 7 S2 : format date inconnue', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ 
                date: "2023-13-34"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    error: true, 
                    reponse: "Date invalide"
                }]);
                done();
            });
    });
    test('Test exo 7 S2 : obtention du dernier jour du mois pour un mois en 30', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ 
                date: "2023-11-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    reponse: "2023-11-30"
                }]);
                done();
            });
    });
    test('Test exo 7 S2 : obtention du dernier jour du mois pour un mois en 31', (done) => {
        request(app)
            .post('/s2/exercice7')
            .send({ 
                date: "2023-12-15"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ 
                    reponse: "2023-12-31"
                }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour formater une durée en heures et minutes
describe('POST /s2/exercice8', () => {
    test('Test exo 8 S2 : pas de valeur', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 8 S2 : manque une heure', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({
                minutes: 30
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 8 S2 : manque une heure', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({
                heures: 20
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 8 S2 : heures plus grand que 24h', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({
                heures: 26,
                minutes: 30
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    reponse: "1 jour(s) 02 heure(s) 30 minute(s)" 
                }]);
                done();
            });
    });
    test('Test exo 8 S2 : minutes plus grad que 60 min', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({
                heures: 20,
                minutes: 68
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    reponse: "21 heure(s) 08 minute(s)" 
                }]);
                done();
            });
    });
    test('Test exo 8 S2 : heures et minutes correctement formattant', (done) => {
        request(app)
            .post('/s2/exercice8')
            .send({
                heures: 20,
                minutes: 30
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    reponse: "20 heure(s) 30 minute(s)" 
                }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour vérifier si deux plages de dates se chevauchent
describe('POST /s2/exercice9', () => {
    test('Test exo 9 S2 : pas de valeur', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : pas de date de debut1', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: null,
                fin1: "2023-11-30",
                debut1: "2023-12-01",
                fin1: "2023-12-15"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : pas de date de fin1', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                debut2: "2023-12-01",
                fin2: "2023-12-14"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : pas de date de debut2', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                fin1: "2023-11-30",
                debut2: null,
                fin2: "2023-12-17"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : pas de date de fin2', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                fin1: "2023-11-30",
                debut2: "2023-12-01"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : date se chefauchent', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                fin1: "2023-11-30",
                debut2: "2023-11-23",
                fin2: "2023-12-16"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{
                    error: true, 
                    reponse: "Les dates se chefauchent"
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : Format de date invalide', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "13-11-2023",
                fin1: "2023-11-30",
                debut2: "2023-12-01",
                fin2: "2023-12-15"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{
                    error: true, 
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : Format de date invalide', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                fin1: "2023-11-30",
                debut2: "2023-12-01",
                fin2: "2033-33-33"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{
                    error: true, 
                    reponse: "Invalide" 
                }]);
                done();
            });
    });
    test('Test exo 9 S2 : les dates ne se chefauchent pas', (done) => {
        request(app)
            .post('/s2/exercice9')
            .send({
                debut1: "2023-11-13",
                fin1: "2023-11-30",
                debut2: "2023-12-01",
                fin2: "2023-12-15"
             })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{
                    reponse: false 
                }]);
                done();
            });
    });
});

// Test unitaire de la fonction pour calculer l'âge à partir de la date de naissance
describe('POST /s2/exercice10', () => {
    test('Test exo 10 S2 : Il manque une date', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date manquante" 
                }]);
                done();
            });
    });
    test('Test exo 10 S2 : Date null', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ 
                dateNaissance: null
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Date manquante" 
                }]);
                done();
            });
    });
    test('Test exo 10 S2 : Format de date incorrect', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ 
                dateNaissance: "13-11-2023"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Format date invalide" 
                }]);
                done();
            });
    });
    test('Test exo 10 S2 : Date inexistante', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ 
                dateNaissance: "2014-24-34"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{  
                    error: true,
                    reponse: "Format date invalide" 
                }]);
                done();
            });
    });
    test('Test exo 10 S2 : Date de naissance correcte', (done) => {
        request(app)
            .post('/s2/exercice10')
            .send({ 
                dateNaissance: "1999-11-13"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{
                    reponse: 23 
                }]);
                done();
            });
    });
});
