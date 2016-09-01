
var vm = new Vue({
    el : '#todos',
    data : {
      tasks : [
          { title : 'One more', done : true},
          { title : 'One more 2', done : false}
      ],
       newTask : ''
    },
    methods : {
        addTask : function (e) {
            e.preventDefault();
            console.log('Task Added!');
            this.tasks.push({ title : this.newTask, done : false});
            this.newTask = '';
        },
        removeTask : function (index) {
            this.tasks.splice(index, 1)
            console.log('Delete');

        }
    },
    ready : function () {
        console.log('OK')
    }
});

