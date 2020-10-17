const Database = require('./db');

Database.then(async db => {
    // Inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours, 
            open_on_weekends
        ) VALUES (
            "-25.3712852",
            "-49.2345013",
            "Lar das meninas",
            "Presta assisTência a crianças de 06 a 15 anos que se encontre em sitaução de reisto e/ou vulneravilidade social.",
            "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"

        );
    `)

    
    // consultar dados da tabela

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")



})