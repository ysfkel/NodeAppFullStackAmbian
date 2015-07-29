define(['app/modules/app'],function(app){
	
	
		//
		
		 function Repository(repo) {
        this.repo = repo;
       }



    Repository.prototype.getAll = function () {

        return this.repo.query();
    }

    Repository.prototype.getAllByParams = function (params) {

        return this.repo.get(params);
    }

    Repository.prototype.getAllById = function (id) {
  
        return this.repo.query({id:id});
    }

 

    Repository.prototype.getData = function () {
        return this.repo.get();
    }

    Repository.prototype.getById = function (id) {
  console.log('get by id called')
        return this.repo.get({id:id})
    }

    Repository.prototype.add = function (entity) {
  
        return this.repo.save(entity);
    }
    

    Repository.prototype.update = function (id, entity) {

       return this.repo.update({ id: id }, entity)
    }
  
    //Delete
    Repository.prototype.remove = function (id) {
        return this.repo.delete({ Id: id })
    }

    Repository.prototype.removeByParams = function (params) {
        return this.repo.delete(params)
    }

    Repository.prototype.removeAll = function (param) {
        return this.repo.delete(param)
    }
		//
		
		return Repository;

	
})