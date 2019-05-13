var assert = require('assert'),
    vows = require('vows');

vows.describe('test1').addBatch({
    'premier test':{
        topic : function(){
            return 1;
        },
        'resultat':function(topic){
            assert.isNumber(topic);
            assert.equal(topic,1);
        }
    }
}).export(module);