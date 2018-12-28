
//时间复杂度是 O(n),空间复杂度也是 O(n)
public class TwoSum {
    public static int[] twoSum(int[] nums, int targes){
        //检查边界条件
        if(nums == null || num.length < 2){
            return new int[]{-1,-1};
        }
        int[] res = new int[]{-1, -1};
        HsahMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            //判断，比如第一个存的值是2， 那么 9-7 = 2， 这个 2 是否存在，存在，则返回相对应的 index，否则继续遍历 11， 15
            if(map.containsKey(target - nums[i])){
                res[0] = map.get(target - nums[i]);
                res[i] = i;
                break;
            }
            //用 hashmap 存值和每个对应的 index
            map.put(nums[i], i);
        }
        return res;
    }
    public static void main(String[] args){

    }
}