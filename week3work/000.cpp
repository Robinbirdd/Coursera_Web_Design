#include<iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {};
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {};
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {};
};

vector<int> Morris_Traversal(TreeNode* root) {
    vector<int> ans;
    TreeNode* cur = root;
    while(cur) {
        if(!cur->left) {
            //ans.push_back(cur->val);
            cur = cur->right;
        }
        else {
            TreeNode* pred = cur->right;
            while(pred->right!=cur && pred->right) 
                pred = pred->right;
            if(pred->right == nullptr) {
                /*先序遍歷*/
                //ans.push_back(pred->val);
                pred->right = cur;
                cur = cur->left;
            }
            else {
                /*中序遍歷*/
                //ans.push_back(pred->val);
                pred->right = nullptr;
                cur = cur->right;
            }
        }

    }
}