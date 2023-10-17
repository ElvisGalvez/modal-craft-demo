import React from 'react';
import OpenCloseExample from '../../examples/OpenCloseExample';
import FadeModalExample from '../../examples/FadeModalExample';
import ExampleSection from '../../components/ExampleSection';
import CustomStyleExample from '../../examples/CustomStyleExample';
import LoginFormModal from '../../examples/LoginFormModal';
import './ExamplesPage.css';
import { 
  openCloseExampleCode, 
  fadeModalExampleCode, 
  customStyleExampleCode,
  loginFormModalExampleCode  
} from './codeSnippets/codeSnippets';

const ExamplesPage = () => {
  return (
    <div className="ExamplesPage">
      <h1>Modal Usage Examples</h1>
      <p>This guide showcases various ways to use the <code>Modal</code> component.</p>

      <ExampleSection
        title="Example 1: Basic Open and Close"
        description="Use the useState hook to control the modal's open and close states."
        code={openCloseExampleCode}
        ExampleComponent={OpenCloseExample}
      />

      <ExampleSection
        title="Example 2: Modal with Fade Effect"
        description="Use the fadeDuration and fadeDelay properties to control the fade effect."
        code={fadeModalExampleCode}
        ExampleComponent={FadeModalExample}
      />

      <ExampleSection
        title="Example 3: Custom Styling"
        description="Use the style and classNames props to customize the modal's appearance."
        code={customStyleExampleCode}
        ExampleComponent={CustomStyleExample}
      />

      <ExampleSection
        title="Example 4: Login Form"
        description="This login form is embedded within a modal. It uses the useState hook to manage the form's state and the modal's open status. The form includes fields for username and password. Upon submission, the form data is displayed in the console and the modal is closed."
        code={loginFormModalExampleCode} 
        ExampleComponent={LoginFormModal} 
      />
    </div>
  );
};

export default ExamplesPage;
