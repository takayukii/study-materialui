/**
* @exports App
**/

var React = require('react');
var Paper = require('material-ui').Paper;
var DropDownMenu = require('material-ui').DropDownMenu;
var TextField = require('material-ui').TextField;
var Checkbox = require('material-ui').Checkbox;

var App = React.createClass({

  getInitialState: function(){
    return {
      inputValue: 'default',
    };
  },

  componentDidMount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {

    var menuItems = [
       { payload: '1', text: 'Never' },
       { payload: '2', text: 'Every Night' },
       { payload: '3', text: 'Weeknights' },
       { payload: '4', text: 'Weekends' },
       { payload: '5', text: 'Weekly' },
    ];

    return (
      <div className="onecoin">
        <div className="main">

          <div className="container">
            <div className="row">
              <div className="col-md-8 cos-sm-12">
                <Paper zDepth={1}>
                  <div className="form">

                    <div className="form-group">
                      <TextField 
                        hintText="Hint Text" 
                        floatingLabelText="Floating Label Text"
                        value={this.state.inputValue} 
                        onChange={this._handleInputChange} />
                    </div>
                    <div className="form-group">
                      <Checkbox
                        name="checkboxName1"
                        value="checkboxValue1"
                        label="went for a run today" />
                      <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="fed the dog"
                        defaultSwitched={true} />
                      <Checkbox
                        name="checkboxName3"
                        value="checkboxValue3"
                        label="built a house on the moon"
                        disabled={true} />
                    </div>

                    <div className="form-group">
                      <DropDownMenu menuItems={menuItems} />
                    </div>

                  </div>
                </Paper>
              </div>
              <div className="col-md-4 cos-sm-12">
                <Paper zDepth={1}>
                  <p>zDepth=1</p>
                </Paper>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  },


  _handleInputChange: function(event){
    this.setState({inputValue: event.target.value});
  }

});



module.exports = App;
