describe("Servers test (with setup and tear-down)", function () {
  beforeAll(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("should Create table row element", function(){
    updateServerTable();
    expect(document.querySelector("#serverTable tbody tr")).not.toEqual(null);

  });

  afterEach(function () {
    document.getElementById("server1").remove()
    serverNameInput.value = '';

  });
});
