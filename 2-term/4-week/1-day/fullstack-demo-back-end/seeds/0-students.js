exports.seed = function(knex, Promise) {
    return knex("student").del().then(function(){
        return Promise.all([
            knex("student").insert({
                first_name: "Kyle",
                last_name: "Coberly",
                date_of_birth: "2/18/3000",
                email: "kyle.coberly@gmail.com"
            }),
            knex("student").insert({
                first_name: "Danny",
                last_name: "Fritz",
                date_of_birth: "3/18/3000",
                email: "danny.fritz@galvanize.com"
            }),
            knex("student").insert({
                first_name: "CJ",
                last_name: "Reynolds",
                date_of_birth: "4/18/3000",
                email: "cj.reynolds@galvanize.com"
            }),
            knex("student").insert({
                first_name: "Roberto",
                last_name: "Ortega",
                date_of_birth: "5/18/3000",
                email: "berto.orto@galvanize.com"
            })
        ]); 
    }); 
};
