describe('Anonymous Refactor', () => {
  beforeEach((done) => {
    resetCache();
    done();
  });

  describe('getAllAnon', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(getAllAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getAllAnon.toString()).to.contain('$.ajax(');
    });
    it('should invoke the success callback on a successful GET request', (done) => {
      const getAllSpy = sinon.spy();
      getAllAnon((messages) => {
        getAllSpy(messages);
        expect(getAllSpy.called).to.equal(true);
        done();
      });
    });
    it('should pass the callback the correctly processed data', (done) => {
      const getAllSpy = sinon.spy();
      getAllAnon((messages) => {
        getAllSpy(messages);
        expect(getAllSpy.args[0][0]).to.be.an('array');
        expect(getAllSpy.args[0][0][0]).to.equal('Hey-you-found-me!');
        done();
      });
    });
  });

  describe('getOneAnon', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(getOneAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(getOneAnon.toString()).to.contain('$.ajax(');
    });
    it('should send an id as a query parameter to the correct url', () => {
      sinon.replace($, 'ajax', sinon.fake());
      getOneAnon(0, () => {});
      expect($.ajax.calledWithMatch({ data: { id: 0 } })).to.equal(true);
      expect($.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/getOne' })).to.equal(true);
    });
    it('should invoke the callback on a successful GET request', (done) => {
      const getOneSpy = sinon.spy();
      getOneAnon(0, (message) => {
        getOneSpy(message);
        expect(getOneSpy.called).to.equal(true);
        expect(getOneSpy.args[0][0]).to.be.a('string');
        expect(getOneSpy.args[0][0]).to.equal(
          'Hey-you-found-me!'
        );
        done();
      });
    });
    it('should pass the callback the correctly processed data', (done) => {
      const getOneSpy = sinon.spy();
      getOneAnon(0, (message) => {
        getOneSpy(message);
        done();
      });
    });
  });

  describe('sendMessageAnon', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(sendMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(sendMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data containing the new message to the correct url', () => {
      sinon.replace($, 'ajax', sinon.fake());
      sendMessageAnon('Hi', () => {});
      expect($.ajax.calledWithMatch({ data: '{"message":"Hi"}' })).to.equal(true);
      expect($.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/send' })).to.equal(true);
    });
    it('should invoke the passed in callback on a successful POST request', (done) => {
      const sendSpy = sinon.spy();
      sendMessageAnon("Hey, hows it going?", (id) => {
        sendSpy(id);
        expect(sendSpy.called).to.equal(true);
        done();
      });
    });
    it('should pass the callback the correctly processed data', (done) => {
      const sendSpy = sinon.spy();
      sendMessageAnon("Hey, hows it going?", (id) => {
        sendSpy(id);
        expect(sendSpy.called).to.equal(true);
        expect(sendSpy.args[0][0]).to.be.a('number');
        done();
      });
    });
  });

  describe('updateMessageAnon', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('should be a function', () => {
      expect(updateMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(updateMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data with the id and new message to the correct url', () => {
      sinon.replace($, 'ajax', sinon.fake());
      updateMessageAnon(0, 'Get those hyphens outta here.', () => {});
      expect($.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/change' })).to.equal(true);
      expect($.ajax.calledWithMatch({ data: '{"id":0,"message":"Get those hyphens outta here."}' })).to.equal(true);
    });
    it('should invoke the passed in callback on a successful PUT request', (done) => {
      const updateSpy = sinon.spy();
      updateMessageAnon(0, 'This is just a test.', () => {
        updateSpy();
        expect(updateSpy.called).to.equal(true);
        done();
      });
    });
    it('should pass the callback the correctly processed data', (done) => {
      const updateSpy = sinon.spy();
      updateMessageAnon(0, 'This is just a test.', (info) => {
        updateSpy(info);
        expect(updateSpy.args[0][0]).to.be.a('string');
        expect(updateSpy.args[0][0]).to.equal('Message 0 successfully updated.')
        done();
      });
    });
  });

  describe('deleteMessageAnon', () => {
    afterEach((done) => {
      sinon.restore();
      resetCache();
      done();
    });
    it('should be a function', () => {
      expect(deleteMessageAnon).to.be.a('function');
    });
    it('should contain an Ajax request', () => {
      expect(deleteMessageAnon.toString()).to.contain('$.ajax(');
    });
    it('should send data containing the deletion target id', () => {
      sinon.replace($, 'ajax', sinon.fake());
      deleteMessageAnon(0, () => {});
      expect($.ajax.calledWithMatch({ url: 'http://127.0.0.1:3000/remove' })).to.equal(true);
      expect($.ajax.calledWithMatch({ data: '{"id":0}' })).to.equal(true);
    });
    it('should invoke the passed in callback on a successful DELETE request', (done) => {
      const deleteSpy = sinon.spy();
      deleteMessageAnon(0, () => {
        deleteSpy();
        expect(deleteSpy.called).to.equal(true);
        done();
      });
    });
    it('should pass the callback the correctly processed data', (done) => {
      const deleteSpy = sinon.spy();
      deleteMessageAnon(0, (info) => {
        deleteSpy(info);
        expect(deleteSpy.args[0][0]).to.be.a('string');
        expect(deleteSpy.args[0][0]).to.equal('Message with ID 0 deleted.');
        done();
      });
    });
  });
});

// A reset call for testing purposes
const resetCache = () => {
  $.ajax({
    type: 'DELETE',
    url: 'http://127.0.0.1:3000/reset',
    success: (data) => {
      // Do nothing
    },
    failure: (err) => {
      // Do nothing
    },
  });
};
