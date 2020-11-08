import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Vpc1 from '../lib/vpc-1-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Vpc1.Vpc1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {
        "hellocdk592CDB1B": {
          "Type": "AWS::EC2::VPC",
          "Properties": {
            "CidrBlock": "10.0.0.0/16",
            "EnableDnsHostnames": true,
            "EnableDnsSupport": true,
            "InstanceTenancy": "default",
            "Tags": [
              {
                "Key": "Name",
                "Value": "MyTestStack/hello-cdk"
              }
            ]
          }
        }}
    }, MatchStyle.EXACT))
});
