describe('AppSync Operations', () => {
    var addedId;
    var allData;
    var emailIdFromTable, nameFromTable, idFromTable;
    var emailid = 'jitendra@123';
    var name = 'JKP';
    it('Add data using mutation, get ID, and query all data', () => {

        //Add data into table and get ID
        cy.addDataAndGetId(emailid, name).then((id) => {
            addedId = id;
            cy.log('Id of the created data is', addedId)
        });

        //Fetch  created data 
        cy.getAllData().then((data) => {
            allData = data;
            //fetch each data from table and assign to  variable
            emailIdFromTable = allData[0].emailid;
            nameFromTable = allData[0].name;
            idFromTable = allData[0].id;

            //Compare fetch data with old data
            expect(emailid).to.equal(emailIdFromTable); 
            expect(name).to.equal(nameFromTable); 
        });
        cy.wait(20000)
    });
    it('Update one data', () => {
        const updatedName = 'Jitendra';
        //Update one data
        cy.updateNameField(addedId, updatedName)
        expect(updatedName).not.to.equal(name); //compare old data with updates data

        cy.wait(20000)
    })
    // it('delete the record', () => {
    //     cy.deleteDataRecord(addedId)
    // })


});